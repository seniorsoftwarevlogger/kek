// Generated from Lol.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LolListener from "./LolListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LolParser extends Parser {
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
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_varDeclaration = 1;
	public static readonly RULE_varAssignment = 2;
	public static readonly RULE_expr = 3;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "varDeclaration", "varAssignment", "expr",
	];
	public get grammarFileName(): string { return "Lol.g4"; }
	public get literalNames(): (string | null)[] { return LolParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LolParser.symbolicNames; }
	public get ruleNames(): string[] { return LolParser.ruleNames; }
	public get serializedATN(): number[] { return LolParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LolParser._ATN, LolParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LolParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 11;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 8;
					this.varDeclaration();
					}
					break;
				case 2:
					{
					this.state = 9;
					this.varAssignment();
					}
					break;
				case 3:
					{
					this.state = 10;
					this.expr(0);
					}
					break;
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1666) !== 0));
			this.state = 15;
			this.match(LolParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDeclaration(): VarDeclarationContext {
		let localctx: VarDeclarationContext = new VarDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LolParser.RULE_varDeclaration);
		try {
			this.state = 23;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 17;
				this.match(LolParser.T__0);
				this.state = 18;
				this.match(LolParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 19;
				this.match(LolParser.T__0);
				this.state = 20;
				this.match(LolParser.ID);
				this.state = 21;
				this.match(LolParser.T__1);
				this.state = 22;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varAssignment(): VarAssignmentContext {
		let localctx: VarAssignmentContext = new VarAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LolParser.RULE_varAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 25;
			this.match(LolParser.ID);
			this.state = 26;
			this.match(LolParser.T__1);
			this.state = 27;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 6;
		this.enterRecursionRule(localctx, 6, LolParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				{
				this.state = 30;
				this.match(LolParser.T__6);
				this.state = 31;
				this.expr(0);
				this.state = 32;
				this.match(LolParser.T__7);
				}
				break;
			case 10:
				{
				this.state = 34;
				this.match(LolParser.FLOAT);
				}
				break;
			case 9:
				{
				this.state = 35;
				this.match(LolParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 46;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 44;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 38;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 39;
						_la = this._input.LA(1);
						if(!(_la===3 || _la===4)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 40;
						this.expr(6);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 41;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 42;
						_la = this._input.LA(1);
						if(!(_la===5 || _la===6)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 43;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,11,50,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,1,1,1,
	1,1,1,1,1,1,1,1,1,3,1,24,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,3,3,37,8,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,3,0,
	1,6,4,0,2,4,6,0,2,1,0,3,4,1,0,5,6,53,0,11,1,0,0,0,2,23,1,0,0,0,4,25,1,0,
	0,0,6,36,1,0,0,0,8,12,3,2,1,0,9,12,3,4,2,0,10,12,3,6,3,0,11,8,1,0,0,0,11,
	9,1,0,0,0,11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,
	1,0,0,0,15,16,5,0,0,1,16,1,1,0,0,0,17,18,5,1,0,0,18,24,5,9,0,0,19,20,5,
	1,0,0,20,21,5,9,0,0,21,22,5,2,0,0,22,24,3,6,3,0,23,17,1,0,0,0,23,19,1,0,
	0,0,24,3,1,0,0,0,25,26,5,9,0,0,26,27,5,2,0,0,27,28,3,6,3,0,28,5,1,0,0,0,
	29,30,6,3,-1,0,30,31,5,7,0,0,31,32,3,6,3,0,32,33,5,8,0,0,33,37,1,0,0,0,
	34,37,5,10,0,0,35,37,5,9,0,0,36,29,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,
	37,46,1,0,0,0,38,39,10,5,0,0,39,40,7,0,0,0,40,45,3,6,3,6,41,42,10,4,0,0,
	42,43,7,1,0,0,43,45,3,6,3,5,44,38,1,0,0,0,44,41,1,0,0,0,45,48,1,0,0,0,46,
	44,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,46,1,0,0,0,6,11,13,23,36,44,46];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LolParser.__ATN) {
			LolParser.__ATN = new ATNDeserializer().deserialize(LolParser._serializedATN);
		}

		return LolParser.__ATN;
	}


	static DecisionsToDFA = LolParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(LolParser.EOF, 0);
	}
	public varDeclaration_list(): VarDeclarationContext[] {
		return this.getTypedRuleContexts(VarDeclarationContext) as VarDeclarationContext[];
	}
	public varDeclaration(i: number): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, i) as VarDeclarationContext;
	}
	public varAssignment_list(): VarAssignmentContext[] {
		return this.getTypedRuleContexts(VarAssignmentContext) as VarAssignmentContext[];
	}
	public varAssignment(i: number): VarAssignmentContext {
		return this.getTypedRuleContext(VarAssignmentContext, i) as VarAssignmentContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_prog;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
}


export class VarDeclarationContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LolParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_varDeclaration;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterVarDeclaration) {
	 		listener.enterVarDeclaration(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitVarDeclaration) {
	 		listener.exitVarDeclaration(this);
		}
	}
}


export class VarAssignmentContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LolParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_varAssignment;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterVarAssignment) {
	 		listener.enterVarAssignment(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitVarAssignment) {
	 		listener.exitVarAssignment(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LolParser.FLOAT, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LolParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_expr;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}
