FROM public.ecr.aws/lambda/nodejs:22

COPY core/handlers/lambda2.mjs ./handlers/index.mjs
COPY package*.json ./
COPY core/services ./services

RUN npm install
# If you are building your code for production, instead include a package-lock.json file on this directory and use:
#RUN npm ci --production

# Command can be overwritten by providing a different command in the template directly.
CMD ["handlers/index.handler"]