import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/user.entity';
import { WorkshopEntity } from './modules/workshop/workshop.entity';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { WorkshopModule } from './modules/workshop/workshop.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MigrationService } from './common/providers/migration.provider';


@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      }
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'subscribe_db',
      entities: [UserEntity, WorkshopEntity],
      migrations: [`${__dirname}/migrations/{.ts,*.js}`],
      synchronize: true,
      logging: true,
      dropSchema: true,
    }),
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    WorkshopModule,
  ],
  controllers: [],
  providers: [MigrationService],
})
export class AppModule implements OnModuleInit {
  constructor(private migrationService: MigrationService) {}

  async onModuleInit() {
    setTimeout(() => {}, 5000);
    await this.migrationService.onModuleInit();
  }
} 