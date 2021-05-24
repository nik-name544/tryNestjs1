import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';
export declare class PostsService {
    private postRepository;
    private fileService;
    constructor(postRepository: typeof Post, fileService: FilesService);
    createPost(dto: CreatePostDto, image: any): Promise<Post>;
}
