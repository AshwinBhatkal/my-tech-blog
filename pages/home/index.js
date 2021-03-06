import LimitingContainer from "../../components/limitingContainer";
import Page from "../../components/page";
import HeroImage from "../../components/heroImage";
import styled from "@emotion/styled";
import Button from "../../components/button";
import { minWidthMQ } from "../../styles/mediaQueries";
import { headerOffset } from "../../styles/sizes";

const gridGap = "20px";

const ComponentContainer = styled.div`
	width: 100%;
	min-height: calc(100vh - ${headerOffset} - 2em);
	display: grid;
	grid-gap: ${gridGap};
	justify-items: center;
	text-align: center;

	${minWidthMQ[1]} {
		align-items: end;
	}

	${minWidthMQ[2]} {
		& h1 {
			text-align: start;
		}
	}
`;

const ButtonContainer = styled.div`
	display: grid;
	row-gap: ${gridGap};
	justify-items: center;
	align-items: center;

	${minWidthMQ[1]} {
		align-self: start;
	}

	${minWidthMQ[2]} {
		justify-self: start;
		align-self: start;
		display: flex;

		& a:first-of-type {
			margin-right: ${gridGap};
		}
	}
`;

export default function Home() {
	return (
		<Page background={"secondary"}>
			<LimitingContainer index={3}>
				<ComponentContainer>
					<h1>
						It is not about the number of things you know, it is all
						about how well you use the things you know.
					</h1>
					<HeroImage />
					<ButtonContainer>
						<Button
							href="/blog"
							type="accent"
							size="x-large"
							weight={700}
						>
							Check out my blog
						</Button>
						<Button
							href="https://github.com/AshwinBhatkal"
							type="primary"
							size="x-large"
							weight={700}
						>
							git checkout code
						</Button>
					</ButtonContainer>
				</ComponentContainer>
			</LimitingContainer>
		</Page>
	);
}
