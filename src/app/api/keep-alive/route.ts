import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
    try {
        // Perform a simple query to keep the Supabase instance active
        const { data, error } = await supabase
            .from("categories")
            .select("id")
            .limit(1);

        if (error) throw error;

        return NextResponse.json({
            success: true,
            status: "Database is active",
            timestamp: new Date().toISOString(),
            data: data
        }, { status: 200 });
    } catch (error: any) {
        console.error("Keep-Alive Ping Failed:", error);
        return NextResponse.json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
}
