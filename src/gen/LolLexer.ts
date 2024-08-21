// Generated from Lol.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LolLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly FLOAT = 7;
	public static readonly WS = 8;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "FLOAT", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "FLOAT", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LolLexer._ATN, LolLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Lol.g4"; }

	public get literalNames(): (string | null)[] { return LolLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LolLexer.symbolicNames; }
	public get ruleNames(): string[] { return LolLexer.ruleNames; }

	public get serializedATN(): number[] { return LolLexer._serializedATN; }

	public get channelNames(): string[] { return LolLexer.channelNames; }

	public get modeNames(): string[] { return LolLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,8,49,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,
	1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,4,6,31,8,6,11,6,12,6,32,1,6,1,6,4,
	6,37,8,6,11,6,12,6,38,3,6,41,8,6,1,7,4,7,44,8,7,11,7,12,7,45,1,7,1,7,0,
	0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,2,1,0,48,57,3,0,9,10,13,13,32,
	32,52,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
	1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,
	0,7,23,1,0,0,0,9,25,1,0,0,0,11,27,1,0,0,0,13,30,1,0,0,0,15,43,1,0,0,0,17,
	18,5,42,0,0,18,2,1,0,0,0,19,20,5,47,0,0,20,4,1,0,0,0,21,22,5,43,0,0,22,
	6,1,0,0,0,23,24,5,45,0,0,24,8,1,0,0,0,25,26,5,40,0,0,26,10,1,0,0,0,27,28,
	5,41,0,0,28,12,1,0,0,0,29,31,7,0,0,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,
	1,0,0,0,32,33,1,0,0,0,33,40,1,0,0,0,34,36,5,46,0,0,35,37,7,0,0,0,36,35,
	1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,34,1,
	0,0,0,40,41,1,0,0,0,41,14,1,0,0,0,42,44,7,1,0,0,43,42,1,0,0,0,44,45,1,0,
	0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,6,7,0,0,48,16,1,0,0,
	0,5,0,32,38,40,45,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LolLexer.__ATN) {
			LolLexer.__ATN = new ATNDeserializer().deserialize(LolLexer._serializedATN);
		}

		return LolLexer.__ATN;
	}


	static DecisionsToDFA = LolLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}