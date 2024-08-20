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
	public static readonly ID = 18;
	public static readonly FLOAT = 19;
	public static readonly WS = 20;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'var'", 
                                                            "'='", "'if'", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "'=='", "'!='", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'*'", "'/'", 
                                                            "'+'", "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "FLOAT", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"ID", "FLOAT", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,20,109,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,
	3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,
	1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,
	17,1,17,5,17,85,8,17,10,17,12,17,88,9,17,1,18,4,18,91,8,18,11,18,12,18,
	92,1,18,1,18,4,18,97,8,18,11,18,12,18,98,3,18,101,8,18,1,19,4,19,104,8,
	19,11,19,12,19,105,1,19,1,19,0,0,20,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
	17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,
	1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,
	9,10,13,13,32,32,113,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
	9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
	0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,
	31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,1,41,1,0,
	0,0,3,45,1,0,0,0,5,47,1,0,0,0,7,50,1,0,0,0,9,52,1,0,0,0,11,54,1,0,0,0,13,
	56,1,0,0,0,15,58,1,0,0,0,17,61,1,0,0,0,19,64,1,0,0,0,21,66,1,0,0,0,23,68,
	1,0,0,0,25,71,1,0,0,0,27,74,1,0,0,0,29,76,1,0,0,0,31,78,1,0,0,0,33,80,1,
	0,0,0,35,82,1,0,0,0,37,90,1,0,0,0,39,103,1,0,0,0,41,42,5,118,0,0,42,43,
	5,97,0,0,43,44,5,114,0,0,44,2,1,0,0,0,45,46,5,61,0,0,46,4,1,0,0,0,47,48,
	5,105,0,0,48,49,5,102,0,0,49,6,1,0,0,0,50,51,5,40,0,0,51,8,1,0,0,0,52,53,
	5,41,0,0,53,10,1,0,0,0,54,55,5,123,0,0,55,12,1,0,0,0,56,57,5,125,0,0,57,
	14,1,0,0,0,58,59,5,61,0,0,59,60,5,61,0,0,60,16,1,0,0,0,61,62,5,33,0,0,62,
	63,5,61,0,0,63,18,1,0,0,0,64,65,5,60,0,0,65,20,1,0,0,0,66,67,5,62,0,0,67,
	22,1,0,0,0,68,69,5,60,0,0,69,70,5,61,0,0,70,24,1,0,0,0,71,72,5,62,0,0,72,
	73,5,61,0,0,73,26,1,0,0,0,74,75,5,42,0,0,75,28,1,0,0,0,76,77,5,47,0,0,77,
	30,1,0,0,0,78,79,5,43,0,0,79,32,1,0,0,0,80,81,5,45,0,0,81,34,1,0,0,0,82,
	86,7,0,0,0,83,85,7,1,0,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,
	1,0,0,0,87,36,1,0,0,0,88,86,1,0,0,0,89,91,7,2,0,0,90,89,1,0,0,0,91,92,1,
	0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,100,1,0,0,0,94,96,5,46,0,0,95,97,7,
	2,0,0,96,95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,
	0,0,0,100,94,1,0,0,0,100,101,1,0,0,0,101,38,1,0,0,0,102,104,7,3,0,0,103,
	102,1,0,0,0,104,105,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,107,1,0,
	0,0,107,108,6,19,0,0,108,40,1,0,0,0,6,0,86,92,98,100,105,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LolLexer.__ATN) {
			LolLexer.__ATN = new ATNDeserializer().deserialize(LolLexer._serializedATN);
		}

		return LolLexer.__ATN;
	}


	static DecisionsToDFA = LolLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}