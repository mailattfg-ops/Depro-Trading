'use server'

import { getSupabaseAdmin } from '@/lib/supabase';
import { isAppError } from '@/types/error';
import { cookies } from 'next/headers';

export async function deleteCategoryAction(categoryId: string) {
    try {
        const supabaseAdmin = getSupabaseAdmin();

        // Security check: verify the user is logged in using the custom auth cookie
        // The admin client does not automatically inherit client cookies in Server Actions
        const cookieStore = await cookies();
        const authCookie = cookieStore.get('sb-auth-token')?.value;

        if (!authCookie) {
            return { success: false, error: "Unauthorized access detected." };
        }
        
        // Use the admin client to bypass RLS for administrative deletion
        const { data, error } = await supabaseAdmin
            .from('categories')
            .delete()
            .eq('id', categoryId)
            .select();

        if (error) {
            // Foreign key constraint (category in use)
            if (error.code === '23503') {
                return { success: false, error: "Cannot delete category because it is being used by products. Please move or delete those products first." };
            }
            return { success: false, error: error.message };
        }

        if (!data || data.length === 0) {
            return { success: false, error: "Category not found or already deleted." };
        }

        return { success: true };
    } catch (err: unknown) {
        return { success: false, error: isAppError(err) ? err.message : "An unexpected error occurred during database sync." };
    }
}
