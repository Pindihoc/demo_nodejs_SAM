FROM public.ecr.aws/lambda/nodejs:22

COPY package*.json ./

COPY handlers/lambda2.mjs ./handlers/index.mjs
COPY services/common ./services/common

RUN npm i --omit=dev
CMD ["handlers/index.handler"]