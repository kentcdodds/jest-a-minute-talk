export const getWinner = jest.fn(
  (p1: string, p2: string): Promise<string> => Promise.resolve(p1),
)
