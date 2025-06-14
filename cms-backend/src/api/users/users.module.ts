import { PrismaModule } from "@/shared/prisma";
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

@Module({
    imports: [PrismaModule],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
