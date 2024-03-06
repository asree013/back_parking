// upload.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { UploadController } from 'src/controllers/upload/upload.controller';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtension = extname(file.originalname);
          callback(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedExtensions = ['.png', '.jpg', '.jpeg'];
        const fileExtension = extname(file.originalname).toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
          callback(null, true); // อนุญาตให้อัปโหลดไฟล์ที่เป็น PNG หรือ JPG
        } else {
          callback(new Error('Only PNG and JPG files are allowed!'), false); // ไม่อนุญาตให้อัปโหลดไฟล์ที่ไม่ใช่ PNG หรือ JPG
        }
      },
    }),
  ],
  
  controllers: [UploadController],

})
export class UploadModule {}
