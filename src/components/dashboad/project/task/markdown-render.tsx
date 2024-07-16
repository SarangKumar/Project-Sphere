import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

interface MarkdownRenderProps {
  children: string;
}

const MarkdownRender: React.FC<MarkdownRenderProps> = ({ children }) => {
  return (
    <div className="prose-h6:text- prose-xs rounded">
      <ReactMarkdown
      //    remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRender;
