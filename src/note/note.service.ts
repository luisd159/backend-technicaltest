import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entity/note.entity';

@Injectable()
export class NoteService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Note) private readonly noteRepository: Repository<Note>,
  ) {}

  /**
   * this is function is used to create Note in Note Entity.
   * @param createNoteDto this will type of createNoteDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of note
   */
  createNote(CreateNoteDto: CreateNoteDto): Promise<Note> {
    const note: Note = new Note();
    note.text = CreateNoteDto.text;
    note.category = CreateNoteDto.category;
    note.archived = CreateNoteDto.archived;
    note.date = CreateNoteDto.date;
    return this.noteRepository.save(note);
  }

  /**
   * this function is used to get all the note's list
   * @returns promise of array of notes
   */
  findAllNote(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of note.
   * @returns promise of note
   */
  viewNote(id: number): Promise<Note> {
    return this.noteRepository.findOneBy({ id });
  }

  /**
   * this function is used to updated specific note whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of note.
   * @param updateNoteDto this is partial type of createNoteDto.
   * @returns promise of udpate note
   */
  updateNote(id: number, UpdateNoteDto: UpdateNoteDto): Promise<Note> {
    const note: Note = new Note();
    note.text = UpdateNoteDto.text;
    note.category = UpdateNoteDto.category;
    note.archived = UpdateNoteDto.archived;
    note.date = UpdateNoteDto.date;
    note.id = id;
    return this.noteRepository.save(note);
  }

  /**
   * this function is used to remove or delete note from database.
   * @param id is the type of number, which represent id of note
   * @returns nuber of rows deleted or affected
   */
  removeNote(id: number): Promise<{ affected?: number }> {
    return this.noteRepository.delete(id);
  }
}
