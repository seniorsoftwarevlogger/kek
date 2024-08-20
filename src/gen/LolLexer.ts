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
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ID = 9;
	public static readonly FLOAT = 10;
	public static readonly WS = 11;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'var'", 
                                                            "'='", "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "FLOAT", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "ID", 
		"FLOAT", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,11,68,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
	1,6,1,7,1,7,1,8,1,8,5,8,44,8,8,10,8,12,8,47,9,8,1,9,4,9,50,8,9,11,9,12,
	9,51,1,9,1,9,4,9,56,8,9,11,9,12,9,57,3,9,60,8,9,1,10,4,10,63,8,10,11,10,
	12,10,64,1,10,1,10,0,0,11,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
	21,11,1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,
	57,3,0,9,10,13,13,32,32,72,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
	0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
	1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,27,1,0,0,0,5,29,1,0,0,0,7,31,1,0,0,
	0,9,33,1,0,0,0,11,35,1,0,0,0,13,37,1,0,0,0,15,39,1,0,0,0,17,41,1,0,0,0,
	19,49,1,0,0,0,21,62,1,0,0,0,23,24,5,118,0,0,24,25,5,97,0,0,25,26,5,114,
	0,0,26,2,1,0,0,0,27,28,5,61,0,0,28,4,1,0,0,0,29,30,5,42,0,0,30,6,1,0,0,
	0,31,32,5,47,0,0,32,8,1,0,0,0,33,34,5,43,0,0,34,10,1,0,0,0,35,36,5,45,0,
	0,36,12,1,0,0,0,37,38,5,40,0,0,38,14,1,0,0,0,39,40,5,41,0,0,40,16,1,0,0,
	0,41,45,7,0,0,0,42,44,7,1,0,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,
	45,46,1,0,0,0,46,18,1,0,0,0,47,45,1,0,0,0,48,50,7,2,0,0,49,48,1,0,0,0,50,
	51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,59,1,0,0,0,53,55,5,46,0,0,54,
	56,7,2,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,
	1,0,0,0,59,53,1,0,0,0,59,60,1,0,0,0,60,20,1,0,0,0,61,63,7,3,0,0,62,61,1,
	0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,6,10,
	0,0,67,22,1,0,0,0,6,0,45,51,57,59,64,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LolLexer.__ATN) {
			LolLexer.__ATN = new ATNDeserializer().deserialize(LolLexer._serializedATN);
		}

		return LolLexer.__ATN;
	}


	static DecisionsToDFA = LolLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}