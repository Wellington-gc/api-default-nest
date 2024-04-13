import { SwaggerCustomOptions, SwaggerDocumentOptions } from '@nestjs/swagger';

export const getSwaggerSetupConfig = () => {
  return {
    customSiteTitle: 'Default API Swagger',
    customfavIcon: '',
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: function (methodA: any, methodB: any) {
        const order = {
          post: '0',
          get: '1',
          patch: '2',
          put: '3',
          delete: '4',
        };
        return order[methodA._root.entries[1][1]].localeCompare(
          order[methodB._root.entries[1][1]],
        );
      },
      docExpansion: 'list',
      displayRequestDuration: true,
      syntaxHighlight: { theme: 'monokai' },
      tryItOutEnabled: true,
      requestSnippetsEnabled: true,
      persistAuthorization: true,
    },
  } as SwaggerCustomOptions;
};

export const getSwaggerDocumentConfig = () => {
  return {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
    deepScanRoutes: true,
    ignoreGlobalPrefix: true,
  } as Partial<SwaggerDocumentOptions>;
};
