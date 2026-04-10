import { Card, Typography } from 'antd';
import type { Post } from '../../types/Post';

const { Title, Paragraph } = Typography;

type Props = {
  post: Post;
}

export default function BlogCard({ post }: Props) {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Title level={3}>{post.title}</Title>
      <Paragraph>{post.content}</Paragraph>
    </Card>
  );
}