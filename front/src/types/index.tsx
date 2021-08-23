import { BrowserRouter as Router, Route, RouteComponentProps } from "react-router-dom";

export type MatchParams = {
    roomId: string
}

export interface MatchProps extends RouteComponentProps<MatchParams> {}
