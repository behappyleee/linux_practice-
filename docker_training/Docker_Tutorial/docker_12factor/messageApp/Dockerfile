FROM node:4.4.5
ENV LAST_UPDATED 20230608T210500

# Copy Source Code
COPY . /app

# Change Working Directory
WORKDIR /app

# Install dependencies
RUN npm install

# EXPOSE API port to the outside
ENV PORT 80
EXPOSE 80

# Launch application
CMD ["npm", "start"]






