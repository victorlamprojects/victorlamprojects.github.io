import styled from "styled-components";
import PageContainer from "../common/PageContainer";
import { Grid, Cell } from "../common/Grid";

const Content = styled(Grid)`
	display: flex;
	margin: 0 1.5rem;
	height: 100%;
	align-content: flex-start;
	justify-content: center;
	.muted {
		opacity: 0.6;
		filter: gray;
	}
`;

const Heading = styled(Cell)`
	text-align: center;
	font-size: 3rem;
`;

const ExperienceContainer = styled.div`
	height: 100%;
	margin: 0;
	padding-top: 3rem;
`;

const Timeline = styled.ul`
	padding: 0;
	margin: 0;
	height: 100%;
	overflow-y: auto;
`;

const Event = styled.li`
	list-style: none;
	position: relative;
	width: 8px;
	height: 8rem;
	margin: 0 auto;
	padding: 3rem 0;
	background-color: #22D1EE;

	&:nth-child(odd) > div{
		left: 1.5rem;
		text-align: left;
	}

	&:nth-child(even) > div{
		left: calc(-50rem - 1.5rem - 8px);
		text-align: right;
		flex-direction: row-reverse;
	}

	&:last-child {
		height: 15rem;
	}
`;

const EventContent = styled(Grid)`
	position: relative;
	bottom: 0;
	width: 50rem;
	font-size: 1.5rem;
	height: 100%;
	align-items: flex-start;
	margin: 0;
`;

const Icon = styled.i`
	position: absolute;
	left: 4px;
	top: 3rem;
	width: 2.25rem;
	height: 2.25rem;
	vertical-align: middle;
	transform: translateX(-50%);
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Period = styled(Cell)`
	font-size: 1.5rem;
	margin: 0;
`;

const Details = styled(Cell)`
	margin: 0;
	line-height: 1.25rem;
	overflow: auto;
`;
const Title = styled(Cell)`
	margin: 0;
	& .muted {
		font-size: 1.125rem;
	}
	&:hover {
		cursor: pointer;
	}
`
const Description = styled(Cell)`
	font-size: 1rem;
	& > pre {
		margin: 0;
		text-align: left;
		white-space: pre-line;
	}
	&.hide {
		height: 0;
		transition: all .5s ease-in-out;
	}
`

const EXPERIENCE = [
	{
		title: "Technology Associate",
		type: "work",
		organization: "Morgan Stanley",
		description: `
		- maintained and enhanced firm's securities lending business\n
		- migrated and revamped legacy projects\n
		- worked with different technologies, e.g. AutoSys, Kafka, Scala, AFS, etc.\n`,
		from: new Date(2022, 12, 1),
		to: null
	},
	{
		title: "Technology Anlayst",
		type: "work",
		organization: "Morgan Stanley",
		description: `
		- a 3-month training program of modern technologies (including cloud, linux, programming languages, etc.)\n
		- a group project for setting up Prometheus and Grafana infrastructure for monitoring hosts\n`,
		from: new Date(2022, 8, 1),
		to: new Date(2022, 12, 1)
	},
	{
		title: "Placement Student (GBS)",
		type: "work",
		organization: "IBM",
		description: `
		- supported DevOps operations (including AWS monitoring and tracing alarms)\n
		- fixed product bug backlog items\n
		- developed new features\n
		- be exposed to different technologies including Spring Framework, Kafka, Microservice, Flyway\n`,
		from: new Date(2021, 7, 1),
		to: new Date(2022, 7, 1)
	},
	{
		title: "Risk Management and Business Intelligence",
		type: "education",
		organization: "Hong Kong University of Science and Technology",
		description: `
		- studied statistic models in risk management\n
		- studied machine learning models including NLP, SVM, Decision Tree, NN, etc.\n
		- a final year capstone project - "Analysis of social media marketing in personal financial services"\n`,
		from: new Date(2018, 7, 1),
		to: new Date(2022, 7, 1)
	}
]

const getDateString = (d) => {
	if (!!!d){
		return "Now"
	}
	const m = new Intl.DateTimeFormat("en-US", {
		month: "short"
	}).format(d);
	return d.getFullYear() + "-" + m;
}
const Experience = () => {
	return (
		<PageContainer className="container" id="experience" style={{paddingTop: "8rem"}}>
			<Content className="content">
				<Heading s={12}>My Journey</Heading>
				<Cell s={12}>
					<ExperienceContainer>
						<Timeline>
						{
							EXPERIENCE.map(exp => (
							<Event key={`experience-${exp.title}-${exp.organization}`} className="no-select">
								<Icon><img src={`${process.env.PUBLIC_URL}/img/${exp.type}.png`} /></Icon>
								<EventContent>
									<Period s={2.5}>{getDateString(exp.from)} ~ {getDateString(exp.to)}</Period>
									<Details s={9.5}>
										<Title s={12}>{exp.title} <br/><span className="muted">at {exp.organization}</span></Title>
										<Description s={12}><pre>{exp.description}</pre></Description>
									</Details>
								</EventContent>
							</Event>))
						}
						</Timeline>
					</ExperienceContainer>
				</Cell>
			</Content>
		</PageContainer>
	);
}

export default Experience;
