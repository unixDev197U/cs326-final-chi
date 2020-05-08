const asyncHandler = fn => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req: Request, res: Response, next: NextFunction)).catch(next);
}

module.exports = asyncHandler;