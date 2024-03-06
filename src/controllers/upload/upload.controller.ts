import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { controllers } from 'src/constants/controller';

@Controller(controllers.upload)
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(@UploadedFile('file') file: Express.Multer.File){
        console.log(file);       
        return "images/"+file.filename
    }
}
