export const isAdmin = (userId?: string | null) => {
  const adminIds = process.env.NEXT_PUBLIC_ADMIN_IDS?.split(',') || [];
  return adminIds.includes(userId || '');
}
