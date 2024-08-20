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
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly ID = 19;
	public static readonly FLOAT = 20;
	public static readonly WS = 21;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'var'", 
                                                            "'='", "'if'", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "'while'", "'=='", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "FLOAT", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "ID", "FLOAT", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,21,117,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,1,0,1,0,1,0,1,0,1,1,1,1,1,2,
	1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,
	1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,
	1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,5,18,93,8,18,10,18,12,18,96,
	9,18,1,19,4,19,99,8,19,11,19,12,19,100,1,19,1,19,4,19,105,8,19,11,19,12,
	19,106,3,19,109,8,19,1,20,4,20,112,8,20,11,20,12,20,113,1,20,1,20,0,0,21,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
	15,31,16,33,17,35,18,37,19,39,20,41,21,1,0,4,3,0,65,90,95,95,97,122,4,0,
	48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,121,0,1,1,0,0,0,
	0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
	0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
	1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,
	0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,1,43,1,0,0,0,3,47,1,0,0,0,5,49,
	1,0,0,0,7,52,1,0,0,0,9,54,1,0,0,0,11,56,1,0,0,0,13,58,1,0,0,0,15,60,1,0,
	0,0,17,66,1,0,0,0,19,69,1,0,0,0,21,72,1,0,0,0,23,74,1,0,0,0,25,76,1,0,0,
	0,27,79,1,0,0,0,29,82,1,0,0,0,31,84,1,0,0,0,33,86,1,0,0,0,35,88,1,0,0,0,
	37,90,1,0,0,0,39,98,1,0,0,0,41,111,1,0,0,0,43,44,5,118,0,0,44,45,5,97,0,
	0,45,46,5,114,0,0,46,2,1,0,0,0,47,48,5,61,0,0,48,4,1,0,0,0,49,50,5,105,
	0,0,50,51,5,102,0,0,51,6,1,0,0,0,52,53,5,40,0,0,53,8,1,0,0,0,54,55,5,41,
	0,0,55,10,1,0,0,0,56,57,5,123,0,0,57,12,1,0,0,0,58,59,5,125,0,0,59,14,1,
	0,0,0,60,61,5,119,0,0,61,62,5,104,0,0,62,63,5,105,0,0,63,64,5,108,0,0,64,
	65,5,101,0,0,65,16,1,0,0,0,66,67,5,61,0,0,67,68,5,61,0,0,68,18,1,0,0,0,
	69,70,5,33,0,0,70,71,5,61,0,0,71,20,1,0,0,0,72,73,5,60,0,0,73,22,1,0,0,
	0,74,75,5,62,0,0,75,24,1,0,0,0,76,77,5,60,0,0,77,78,5,61,0,0,78,26,1,0,
	0,0,79,80,5,62,0,0,80,81,5,61,0,0,81,28,1,0,0,0,82,83,5,42,0,0,83,30,1,
	0,0,0,84,85,5,47,0,0,85,32,1,0,0,0,86,87,5,43,0,0,87,34,1,0,0,0,88,89,5,
	45,0,0,89,36,1,0,0,0,90,94,7,0,0,0,91,93,7,1,0,0,92,91,1,0,0,0,93,96,1,
	0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,38,1,0,0,0,96,94,1,0,0,0,97,99,7,2,
	0,0,98,97,1,0,0,0,99,100,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,108,
	1,0,0,0,102,104,5,46,0,0,103,105,7,2,0,0,104,103,1,0,0,0,105,106,1,0,0,
	0,106,104,1,0,0,0,106,107,1,0,0,0,107,109,1,0,0,0,108,102,1,0,0,0,108,109,
	1,0,0,0,109,40,1,0,0,0,110,112,7,3,0,0,111,110,1,0,0,0,112,113,1,0,0,0,
	113,111,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,116,6,20,0,0,116,42,
	1,0,0,0,6,0,94,100,106,108,113,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LolLexer.__ATN) {
			LolLexer.__ATN = new ATNDeserializer().deserialize(LolLexer._serializedATN);
		}

		return LolLexer.__ATN;
	}


	static DecisionsToDFA = LolLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}