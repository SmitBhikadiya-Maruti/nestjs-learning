import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonationsModule } from './donations/donations.module';
import { GraphQLDateTime } from 'graphql-iso-date';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    resolvers: { DateTime: GraphQLDateTime },
  }), DonationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
