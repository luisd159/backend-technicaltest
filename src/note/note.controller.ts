import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

/**
 * whatever the string pass in controller decorator it will be appended to
 * API URL. to call any API from this controller you need to add prefix which is
 * passed in controller decorator.
 * in our case our base URL is http://localhost:3000/note
 */
@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  /**
   * Post decorator represents method of request as we have used post decorator the method
   * of this API will be post.
   * so the API URL to create Note will be
   * POST http://localhost:3000/note
   */
  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.createNote(createNoteDto);
  }

  /**
   * we have used get decorator to get all the note's list
   * so the API URL will be
   * GET http://localhost:3000/note
   */
  @Get()
  findAll() {
    return this.noteService.findAllNote();
  }

  /**
   * we have used get decorator with id param to get id from request
   * so the API URL will be
   * GET http://localhost:3000/note/:id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteService.viewNote(+id);
  }

  /**
   * we have used patch decorator with id param to get id from request
   * so the API URL will be
   * PATCH http://localhost:3000/note/:id
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.updateNote(+id, updateNoteDto);
  }

  /**
   * we have used Delete decorator with id param to get id from request
   * so the API URL will be
   * DELETE http://localhost:3000/note/:id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.removeNote(+id);
  }
}
