import React from "react";
import NewArticles from "../../feature/blog/components/newArticles";
import Progress from "../../feature/blog/components/Progress";
import SocialMedia from "../../feature/blog/components/SocialMedia";

function Blog() {
  return (
    <>
      <div className="container mx-auto">
        <NewArticles />
        <Progress />
      </div>
      <SocialMedia />
    </>
  );
}

export default Blog;
