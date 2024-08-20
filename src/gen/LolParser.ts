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
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly ID = 21;
	public static readonly FLOAT = 22;
	public static readonly WS = 23;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_statements = 1;
	public static readonly RULE_varDeclaration = 2;
	public static readonly RULE_varAssignment = 3;
	public static readonly RULE_ifStatement = 4;
	public static readonly RULE_whileStatement = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_functionCall = 7;
	public static readonly RULE_comparisonOperator = 8;
	public static readonly RULE_returnExpr = 9;
	public static readonly RULE_expr = 10;
	public static readonly RULE_arg = 11;
	public static readonly literalNames: (string | null)[] = [ null, "'var'", 
                                                            "'='", "'if'", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "'while'", "'function'", 
                                                            "'=='", "'!='", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'return'", 
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
                                                             null, null, 
                                                             null, "ID", 
                                                             "FLOAT", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statements", "varDeclaration", "varAssignment", "ifStatement", 
		"whileStatement", "functionDeclaration", "functionCall", "comparisonOperator", 
		"returnExpr", "expr", "arg",
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
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.statements();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6357786) !== 0));
			this.state = 29;
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
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LolParser.RULE_statements);
		try {
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 31;
				this.varDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 32;
				this.varAssignment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 33;
				this.ifStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 34;
				this.whileStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 35;
				this.functionDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 36;
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
	public varDeclaration(): VarDeclarationContext {
		let localctx: VarDeclarationContext = new VarDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LolParser.RULE_varDeclaration);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 39;
				this.match(LolParser.T__0);
				this.state = 40;
				this.match(LolParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 41;
				this.match(LolParser.T__0);
				this.state = 42;
				this.match(LolParser.ID);
				this.state = 43;
				this.match(LolParser.T__1);
				this.state = 44;
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
		this.enterRule(localctx, 6, LolParser.RULE_varAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			this.match(LolParser.ID);
			this.state = 48;
			this.match(LolParser.T__1);
			this.state = 49;
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
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LolParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this.match(LolParser.T__2);
			this.state = 52;
			this.match(LolParser.T__3);
			this.state = 53;
			this.expr(0);
			this.state = 54;
			this.match(LolParser.T__4);
			this.state = 55;
			this.match(LolParser.T__5);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 56;
				this.statements();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6357786) !== 0));
			this.state = 61;
			this.match(LolParser.T__6);
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
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LolParser.RULE_whileStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(LolParser.T__7);
			this.state = 64;
			this.match(LolParser.T__3);
			this.state = 65;
			this.expr(0);
			this.state = 66;
			this.match(LolParser.T__4);
			this.state = 67;
			this.match(LolParser.T__5);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 68;
				this.statements();
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6357786) !== 0));
			this.state = 73;
			this.match(LolParser.T__6);
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
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LolParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(LolParser.T__8);
			this.state = 76;
			this.match(LolParser.ID);
			this.state = 77;
			this.match(LolParser.T__3);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 78;
				this.match(LolParser.ID);
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
			this.match(LolParser.T__4);
			this.state = 85;
			this.match(LolParser.T__5);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 86;
				this.statements();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6357786) !== 0));
			this.state = 91;
			this.match(LolParser.T__6);
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
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LolParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 93;
			this.match(LolParser.ID);
			this.state = 94;
			this.match(LolParser.T__3);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21 || _la===22) {
				{
				{
				this.state = 95;
				this.arg();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(LolParser.T__4);
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
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LolParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 103;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 64512) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnExpr(): ReturnExprContext {
		let localctx: ReturnExprContext = new ReturnExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LolParser.RULE_returnExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 105;
			this.match(LolParser.T__15);
			this.state = 106;
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
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, LolParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 109;
				this.match(LolParser.T__3);
				this.state = 110;
				this.expr(0);
				this.state = 111;
				this.match(LolParser.T__4);
				}
				break;
			case 2:
				{
				this.state = 113;
				this.functionCall();
				}
				break;
			case 3:
				{
				this.state = 114;
				this.returnExpr();
				}
				break;
			case 4:
				{
				this.state = 115;
				this.match(LolParser.FLOAT);
				}
				break;
			case 5:
				{
				this.state = 116;
				this.match(LolParser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 131;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 129;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 119;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 120;
						_la = this._input.LA(1);
						if(!(_la===17 || _la===18)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 121;
						this.expr(9);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 122;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 123;
						_la = this._input.LA(1);
						if(!(_la===19 || _la===20)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 124;
						this.expr(8);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 125;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 126;
						this.comparisonOperator();
						this.state = 127;
						this.expr(7);
						}
						break;
					}
					}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
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
	// @RuleVersion(0)
	public arg(): ArgContext {
		let localctx: ArgContext = new ArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LolParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
			_la = this._input.LA(1);
			if(!(_la===21 || _la===22)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,23,137,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,4,0,26,8,0,11,0,12,0,27,1,0,1,0,1,1,1,1,1,1,1,1,1,
	1,1,1,3,1,38,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,46,8,2,1,3,1,3,1,3,1,3,1,4,
	1,4,1,4,1,4,1,4,1,4,4,4,58,8,4,11,4,12,4,59,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
	1,5,4,5,70,8,5,11,5,12,5,71,1,5,1,5,1,6,1,6,1,6,1,6,5,6,80,8,6,10,6,12,
	6,83,9,6,1,6,1,6,1,6,4,6,88,8,6,11,6,12,6,89,1,6,1,6,1,7,1,7,1,7,5,7,97,
	8,7,10,7,12,7,100,9,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,3,10,118,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,5,10,130,8,10,10,10,12,10,133,9,10,1,11,1,11,1,11,0,1,20,
	12,0,2,4,6,8,10,12,14,16,18,20,22,0,4,1,0,10,15,1,0,17,18,1,0,19,20,1,0,
	21,22,143,0,25,1,0,0,0,2,37,1,0,0,0,4,45,1,0,0,0,6,47,1,0,0,0,8,51,1,0,
	0,0,10,63,1,0,0,0,12,75,1,0,0,0,14,93,1,0,0,0,16,103,1,0,0,0,18,105,1,0,
	0,0,20,117,1,0,0,0,22,134,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,
	0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,0,0,1,30,1,1,0,0,
	0,31,38,3,4,2,0,32,38,3,6,3,0,33,38,3,8,4,0,34,38,3,10,5,0,35,38,3,12,6,
	0,36,38,3,20,10,0,37,31,1,0,0,0,37,32,1,0,0,0,37,33,1,0,0,0,37,34,1,0,0,
	0,37,35,1,0,0,0,37,36,1,0,0,0,38,3,1,0,0,0,39,40,5,1,0,0,40,46,5,21,0,0,
	41,42,5,1,0,0,42,43,5,21,0,0,43,44,5,2,0,0,44,46,3,20,10,0,45,39,1,0,0,
	0,45,41,1,0,0,0,46,5,1,0,0,0,47,48,5,21,0,0,48,49,5,2,0,0,49,50,3,20,10,
	0,50,7,1,0,0,0,51,52,5,3,0,0,52,53,5,4,0,0,53,54,3,20,10,0,54,55,5,5,0,
	0,55,57,5,6,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,0,0,
	59,60,1,0,0,0,60,61,1,0,0,0,61,62,5,7,0,0,62,9,1,0,0,0,63,64,5,8,0,0,64,
	65,5,4,0,0,65,66,3,20,10,0,66,67,5,5,0,0,67,69,5,6,0,0,68,70,3,2,1,0,69,
	68,1,0,0,0,70,71,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,
	5,7,0,0,74,11,1,0,0,0,75,76,5,9,0,0,76,77,5,21,0,0,77,81,5,4,0,0,78,80,
	5,21,0,0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,
	1,0,0,0,83,81,1,0,0,0,84,85,5,5,0,0,85,87,5,6,0,0,86,88,3,2,1,0,87,86,1,
	0,0,0,88,89,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,92,5,7,
	0,0,92,13,1,0,0,0,93,94,5,21,0,0,94,98,5,4,0,0,95,97,3,22,11,0,96,95,1,
	0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,
	1,0,0,0,101,102,5,5,0,0,102,15,1,0,0,0,103,104,7,0,0,0,104,17,1,0,0,0,105,
	106,5,16,0,0,106,107,3,20,10,0,107,19,1,0,0,0,108,109,6,10,-1,0,109,110,
	5,4,0,0,110,111,3,20,10,0,111,112,5,5,0,0,112,118,1,0,0,0,113,118,3,14,
	7,0,114,118,3,18,9,0,115,118,5,22,0,0,116,118,5,21,0,0,117,108,1,0,0,0,
	117,113,1,0,0,0,117,114,1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,131,
	1,0,0,0,119,120,10,8,0,0,120,121,7,1,0,0,121,130,3,20,10,9,122,123,10,7,
	0,0,123,124,7,2,0,0,124,130,3,20,10,8,125,126,10,6,0,0,126,127,3,16,8,0,
	127,128,3,20,10,7,128,130,1,0,0,0,129,119,1,0,0,0,129,122,1,0,0,0,129,125,
	1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,21,1,0,0,0,
	133,131,1,0,0,0,134,135,7,3,0,0,135,23,1,0,0,0,11,27,37,45,59,71,81,89,
	98,117,129,131];

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
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
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


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public varAssignment(): VarAssignmentContext {
		return this.getTypedRuleContext(VarAssignmentContext, 0) as VarAssignmentContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_statements;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
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


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_ifStatement;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_whileStatement;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LolParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LolParser.ID, i);
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_functionDeclaration;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LolParser.ID, 0);
	}
	public arg_list(): ArgContext[] {
		return this.getTypedRuleContexts(ArgContext) as ArgContext[];
	}
	public arg(i: number): ArgContext {
		return this.getTypedRuleContext(ArgContext, i) as ArgContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_functionCall;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_comparisonOperator;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
}


export class ReturnExprContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_returnExpr;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterReturnExpr) {
	 		listener.enterReturnExpr(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitReturnExpr) {
	 		listener.exitReturnExpr(this);
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
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public returnExpr(): ReturnExprContext {
		return this.getTypedRuleContext(ReturnExprContext, 0) as ReturnExprContext;
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LolParser.FLOAT, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LolParser.ID, 0);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
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


export class ArgContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LolParser.ID, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LolParser.FLOAT, 0);
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_arg;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterArg) {
	 		listener.enterArg(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitArg) {
	 		listener.exitArg(this);
		}
	}
}
