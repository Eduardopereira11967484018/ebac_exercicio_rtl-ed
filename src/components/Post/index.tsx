import styles from './Post.module.css';
import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
    altText: string;
}

const Post = ({ children, imageUrl, altText }: Props) => (
    <div className={styles.post}>
        <img className={styles.postImage} src={imageUrl} alt={altText} />
        <p className={styles.postText}>{children}</p>
        <PostComments />
    </div>
);

export default Post;
