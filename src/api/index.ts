export function testAPI(): Promise<{ payload: string }> {
  return new Promise((resolve => resolve({ payload: 'success' })));
}