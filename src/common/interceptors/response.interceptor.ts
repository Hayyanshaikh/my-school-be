import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => ({
        status: true,
        statusCode: context.switchToHttp().getResponse().statusCode,
        data: data.data ?? data,
        message: data.message || 'Request successful',
        metadata: data?.meta
          ? {
              maxLimit: data.meta.maxLimit || Number(process.env.MAX_LIMIT),
              total: data.meta.total || 0,
              totalRecords: data.meta.totalRecords || 0,
            }
          : undefined,
      })),
    );
  }
}
