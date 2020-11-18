import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
// import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import LimitingContainer from "../../components/limitingContainer";
import Page from "../../components/page";
import Image from "../../components/image";
import PostsComponents from "../../components/posts";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	// TestComponent: dynamic(() => import("../../components/TestComponent")),
	img: Image,
	h1: PostsComponents.Heading1,
	h2: PostsComponents.Heading2,
	h3: PostsComponents.Heading3,
	p: PostsComponents.Paragraph,
	ol: PostsComponents.OrderedList,
	blockquote: PostsComponents.Blockquote,
	Caption: PostsComponents.Caption,
	Separator: PostsComponents.Separator,
};

export default function PostPage({ source, frontMatter }) {
	const content = hydrate(source, {
		components,
	});
	return (
		<Page>
			<Head>
				<title>{frontMatter.title}</title>
			</Head>
			<LimitingContainer index={1}>
				<main>{content}</main>
			</LimitingContainer>
		</Page>
	);
}

export const getStaticProps = async ({ params }) => {
	const postFilePath = path.join(
		process.cwd(),
		"pages/blog/posts",
		`${params.uri}.mdx`
	);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await renderToString(content, {
		components,
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths = async () => {
	const postFilePaths = fs
		.readdirSync(path.join(process.cwd(), "pages/blog/posts"))
		// Only include md(x) files
		.filter(path => /\.mdx?$/.test(path));

	const paths = postFilePaths
		// Remove file extensions for page paths
		.map(path => path.replace(/\.mdx?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map(uri => ({ params: { uri } }));

	return {
		paths,
		fallback: false,
	};
};
