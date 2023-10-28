FROM node:17 AS base

WORKDIR /workspace/rsc-supabase
# COPY ./package.json .
# RUN npm install

# CMD [ "npm", "run", "start" ]
CMD ["bash"]

# Build
# FROM base AS test-and-build
# COPY . /workspace
# WORKDIR /workspace
# ARG REACT_APP_API_SERVER
# RUN npm ci && npm run test && npm run build

# # Hosting in nginx
# FROM nginx:latest AS production
# COPY --from=test-and-build /workspace/build /var/www
# COPY nginx.conf /etc/nginx/conf.d/default.conf