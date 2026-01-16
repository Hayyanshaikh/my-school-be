import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const res = exception.getResponse() as any;

    response.status(status).json({
      success: false,
      message: typeof res === 'string' ? res : res.message || 'Error occurred',
      errors: res?.errors || null,
      data: res?.errors || null,
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  }
}
