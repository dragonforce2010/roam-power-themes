import { ChangeEvent } from "react";
export declare type DatalogSrcVar = {
  type: "src-var";
  value: string;
};
export declare type DatalogVariable = {
  type: "variable";
  value: string;
};
export declare type DatalogAndClause = {
  type: "and-clause";
  clauses: DatalogClause[];
};
export declare type DatalogExpressionClause = DatalogDataPattern | DatalogPredExpr | DatalogFnExpr | DatalogRuleExpr;
export declare type DatalogRuleExpr = {
  type: "rule-expr";
  srcVar?: DatalogSrcVar;
  ruleName: DatalogRuleName;
  arguments: DatalogArgument[];
};
export declare type DatalogNotClause = {
  type: "not-clause";
  srcVar?: DatalogSrcVar;
  clauses: DatalogClause[];
};
export declare type DatalogNotJoinClause = {
  type: "not-join-clause";
  srcVar?: DatalogSrcVar;
  variables: DatalogVariable[];
  clauses: DatalogClause[];
};
export declare type DatalogOrClause = {
  type: "or-clause";
  srcVar?: DatalogSrcVar;
  clauses: DatalogClause[];
};
export declare type DatalogOrJoinClause = {
  type: "or-join-clause";
  srcVar?: DatalogSrcVar;
  variables: DatalogVariable[];
  clauses: DatalogClause[];
};
export declare type DatalogClause = DatalogNotClause | DatalogOrJoinClause | DatalogExpressionClause | DatalogOrClause | DatalogNotJoinClause | DatalogAndClause;
export declare type DatalogDataPattern = {
  type: "data-pattern";
  srcVar?: DatalogSrcVar;
  arguments: DatalogArgument[];
};
export declare type DatalogArgument = DatalogSrcVar | DatalogVariable | DatalogConstant | DatalogUnderscore;
export declare type DatalogConstant = {
  type: "constant";
  value: string;
};
export declare type DatalogPredExpr = {
  type: "pred-expr";
  pred: "<" | ">" | "re-matches" | "re-find" | "clojure.string/includes?" | "clojure.string/ends-with?" | "clojure.string/starts-with?";
  arguments: DatalogArgument[];
};
export declare type DatalogFnExpr = {
  type: "fn-expr";
  fn: "re-pattern";
  arguments: DatalogArgument[];
  binding: DatalogBinding;
};
export declare type DatalogBinding = DatalogBindScalar | DatalogBindTuple | DatalogBindColl | DatalogBindRel;
export declare type DatalogBindScalar = {
  type: "bind-scalar";
  variable: DatalogVariable;
};
export declare type DatalogBindTuple = {
  type: "bind-tuple";
  args: (DatalogVariable | DatalogUnderscore)[];
};
export declare type DatalogBindColl = {
  type: "bind-col";
  variable: DatalogVariable;
};
export declare type DatalogBindRel = {
  type: "bind-rel";
  args: (DatalogVariable | DatalogUnderscore)[];
};
export declare type DatalogUnderscore = {
  type: "underscore";
  value: "_";
};
export declare type DatalogRuleName = {
  type: "rulename";
  value: string;
};
export declare type RoamBasicBlock = {
  string: string;
  uid: string;
};
export declare type RoamBasicPage = {
  title: string;
  uid: string;
};
export declare type RoamBasicNode = {
  text: string;
  uid: string;
  children: RoamBasicNode[];
};
export declare type RoamPull = {
  "block/children"?: RoamNode[];
  "block/heading"?: number;
  "block/open"?: boolean;
  "block/order"?: number;
  "block/page"?: RoamNode;
  "block/parents"?: RoamNode[];
  "block/refs"?: RoamNode[];
  "block/string"?: string;
  "block/uid"?: string;
  "children/view-type"?: `:${ViewType}`;
  "create/time"?: number;
  "create/user"?: RoamNode;
  "edit/time"?: number;
  "edit/user"?: RoamNode;
  "log/id"?: number;
  "node/title"?: string;
} & RoamNode;
export declare type PullBlock = {
  ":block/children"?: ({
    ":db/id": number;
  } | PullBlock)[];
  ":block/heading"?: number;
  ":block/open"?: boolean;
  ":block/order"?: number;
  ":block/page"?: {
    ":db/id": number;
  };
  ":block/parents"?: {
    ":db/id": number;
  }[];
  ":block/props"?: {
    ":image-size"?: {
      [p: string]: {
        ":height": number;
        ":width": number;
      };
    };
    ":iframe"?: {
      [p: string]: {
        ":size": {
          ":height": number;
          ":width": number;
        };
      };
    };
  };
  ":block/refs"?: {
    ":db/id": number;
  }[];
  ":block/string"?: string;
  ":block/text-align"?: TextAlignment;
  ":block/uid"?: string;
  ":children/view-type"?: `:${ViewType}`;
  ":create/time"?: number;
  ":create/user"?: {
    ":db/id": number;
  };
  ":edit/time"?: number;
  ":edit/user"?: {
    ":db/id": number;
  };
  ":db/id"?: number;
  ":log/id"?: number;
  ":node/title"?: string;
  ":user/display-name"?: string;
  ":user/display-page"?: {
    ":db/id": number;
  };
  ":user/settings"?: {
    ":namespace-options": [":none", ":partial", ":full"];
    ":link-brackets?": boolean;
    ":showing-inline-references?": boolean;
    ":right-sidebar-pinned": {
      [uuid: string]: SidebarWindow;
    };
    ":showing-own-icons?": boolean;
    ":showing-user-icons?": boolean;
    ":first-day-of-week"?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  };
  ":user/uid"?: string;
};
export declare type RoamPullResult = RoamPull | null;
export declare type ViewType = "document" | "bullet" | "numbered";
export declare type TextAlignment = "left" | "center" | "right" | "justify";
export declare type RoamBlock = {
  attrs?: {
    source: string[];
  }[][];
  children?: {
    id: number;
  }[];
  id?: number;
  string?: string;
  title?: string;
  time?: number;
  uid?: string;
  order?: number;
  "view-type"?: ViewType;
};
export declare type RoamError = {
  raw: string;
  "status-code": number;
};
export declare type TreeNode = {
  text: string;
  order: number;
  children: TreeNode[];
  parents: number[];
  uid: string;
  heading: number;
  open: boolean;
  viewType: ViewType;
  editTime: Date;
  textAlign: TextAlignment;
  props: {
    imageResize: {
      [link: string]: {
        height: number;
        width: number;
      };
    };
    iframe: {
      [link: string]: {
        height: number;
        width: number;
      };
    };
  };
};
export declare type TextNode = {
  text: string;
  children: TextNode[];
};
export declare type InputTextNode = {
  text: string;
  children?: InputTextNode[];
  uid?: string;
  heading?: number;
  textAlign?: TextAlignment;
  viewType?: ViewType;
  open?: boolean;
};
declare type PlusType = [number, string];
export declare type RoamNode = {
  "db/id": number;
};
export declare type RoamQuery = RoamPull & {
  "block/graph"?: RoamNode;
  "node/graph+title"?: PlusType;
  "block/graph+uid"?: PlusType;
  "node/graph"?: RoamNode;
  "edit/email"?: string;
  "entity/graph"?: RoamNode;
};
export declare type RoamQueryResult = number & RoamQuery;
export declare type ClientParams = {
  action: "pull" | "q" | "create-block" | "update-block" | "create-page" | "move-block" | "delete-block" | "delete-page" | "update-page";
  selector?: string;
  uid?: string;
  query?: string;
  inputs?: string[];
} & ActionParams;
export declare type ActionParams = {
  location?: {
    "parent-uid": string;
    order: number;
  };
  block?: {
    string?: string;
    uid?: string;
    open?: boolean;
    heading?: number;
    "text-align"?: TextAlignment;
    "children-view-type"?: ViewType;
  };
  page?: {
    title?: string;
    uid?: string;
  };
};
export declare type WriteAction = (a: ActionParams) => Promise<void>;
export declare type UserSettings = {
  "global-filters": {
    includes: string[];
    removes: string[];
  };
};
declare type SidebarWindowType = SidebarBlockWindow | SidebarMentionsWindow | SidebarGraphWindow | SidebarOutlineWindow;
export declare type SidebarWindowInput = {
  "block-uid": string;
  type: SidebarWindowType["type"];
};
declare type SidebarBlockWindow = {
  type: "block";
  "block-uid": string;
};
declare type SidebarOutlineWindow = {
  type: "outline";
  "page-uid": string;
};
declare type SidebarMentionsWindow = {
  type: "mentions";
  "mentions-uid": string;
};
declare type SidebarGraphWindow = {
  type: "graph";
  "block-uid": string;
};
export declare type SidebarAction = (action: {
  window: SidebarWindowInput;
}) => Promise<void>;
export declare type SidebarWindow = {
  "collapsed?": boolean;
  order: number;
  "pinned?": boolean;
  "window-id": string;
} & SidebarWindowType;
export declare type AddPullWatch = (pullPattern: string, entityId: string, callback: (before: PullBlock | null, after: PullBlock | null) => void) => boolean;
declare type ButtonAction = {
  type: "button";
  onClick?: (e: MouseEvent) => void;
  content: string;
};
declare type SwitchAction = {
  type: "switch";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare type InputAction = {
  type: "input";
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare type SelectAction = {
  type: "select";
  items: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare type CustomAction = {
  type: "reactComponent";
  component: React.FC;
};
export declare type Action = ButtonAction | SwitchAction | InputAction | SelectAction | CustomAction;
export declare type PanelConfig = {
  tabTitle: string;
  settings: {
    id: string;
    name: string;
    description: string;
    action: Action;
  }[];
};

export declare type ExtensionAPI = {
  settings: {
    get: (k: string) => unknown;
    getAll: () => Record<string, unknown>;
    panel: {
      create: (c: PanelConfig) => void;
    };
    set: (k: string, v: unknown) => Promise<void>;
  };
}

export declare type OnloadArgs = {
  extensionAPI: ExtensionAPI,
  extension: {
    version: string;
  };
};
export { };
