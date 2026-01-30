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
      map((data) => {
        const { data: innerData, message, meta, ...rest } = data ?? {};

        return {
          status: true,
          statusCode: context.switchToHttp().getResponse().statusCode,
          data: innerData ?? data,
          message: message || 'Request successful',
          metadata: meta
            ? {
                maxLimit: meta.maxLimit || Number(process.env.MAX_LIMIT),
                total: meta.total || 0,
                totalRecords: meta.totalRecords || 0,
              }
            : undefined,
          ...rest,
        };
      }),
    );
  }
}
