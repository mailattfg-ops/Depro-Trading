export interface AppError {
    message: string;
    code?: string;
    details?: string;
    hint?: string;
}

export function isAppError(error: unknown): error is AppError {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as any).message === 'string'
    );
}
