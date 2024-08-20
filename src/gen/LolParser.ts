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
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly ID = 23;
	public static readonly FLOAT = 24;
	public static readonly WS = 25;
	public static readonly COMMENT = 26;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_varDeclaration = 2;
	public static readonly RULE_varAssignment = 3;
	public static readonly RULE_ifStatement = 4;
	public static readonly RULE_whileStatement = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_functionCall = 7;
	public static readonly RULE_block = 8;
	public static readonly RULE_comparisonOperator = 9;
	public static readonly RULE_returnStatement = 10;
	public static readonly RULE_expr = 11;
	public static readonly literalNames: (string | null)[] = [ null, "'var'", 
                                                            "'='", "'if'", 
                                                            "'('", "')'", 
                                                            "'else'", "'while'", 
                                                            "'function'", 
                                                            "','", "'{'", 
                                                            "'}'", "'=='", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'return'", 
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
                                                             null, null, 
                                                             null, "ID", 
                                                             "FLOAT", "WS", 
                                                             "COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statement", "varDeclaration", "varAssignment", "ifStatement", 
		"whileStatement", "functionDeclaration", "functionCall", "block", "comparisonOperator", 
		"returnStatement", "expr",
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
				this.statement();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25428378) !== 0));
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LolParser.RULE_statement);
		try {
			this.state = 38;
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
				this.returnStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 37;
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this.match(LolParser.T__0);
			this.state = 41;
			this.match(LolParser.ID);
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 42;
				this.match(LolParser.T__1);
				this.state = 43;
				this.expr(0);
				}
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
	public varAssignment(): VarAssignmentContext {
		let localctx: VarAssignmentContext = new VarAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LolParser.RULE_varAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 46;
			this.match(LolParser.ID);
			this.state = 47;
			this.match(LolParser.T__1);
			this.state = 48;
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
			this.state = 50;
			this.match(LolParser.T__2);
			this.state = 51;
			this.match(LolParser.T__3);
			this.state = 52;
			this.expr(0);
			this.state = 53;
			this.match(LolParser.T__4);
			this.state = 54;
			this.block();
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 55;
				this.match(LolParser.T__5);
				this.state = 58;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
					{
					this.state = 56;
					this.ifStatement();
					}
					break;
				case 10:
					{
					this.state = 57;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
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
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LolParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.match(LolParser.T__6);
			this.state = 63;
			this.match(LolParser.T__3);
			this.state = 64;
			this.expr(0);
			this.state = 65;
			this.match(LolParser.T__4);
			this.state = 66;
			this.block();
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
			this.state = 68;
			this.match(LolParser.T__7);
			this.state = 69;
			this.match(LolParser.ID);
			this.state = 70;
			this.match(LolParser.T__3);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 71;
				this.match(LolParser.ID);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 72;
					this.match(LolParser.T__8);
					this.state = 73;
					this.match(LolParser.ID);
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 81;
			this.match(LolParser.T__4);
			this.state = 82;
			this.block();
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
			this.state = 84;
			this.match(LolParser.ID);
			this.state = 85;
			this.match(LolParser.T__3);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25165840) !== 0)) {
				{
				this.state = 86;
				this.expr(0);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 87;
					this.match(LolParser.T__8);
					this.state = 88;
					this.expr(0);
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 96;
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
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LolParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.match(LolParser.T__9);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 99;
				this.statement();
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25428378) !== 0));
			this.state = 104;
			this.match(LolParser.T__10);
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
		this.enterRule(localctx, 18, LolParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 106;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 258048) !== 0))) {
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
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LolParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.match(LolParser.T__17);
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 109;
				this.expr(0);
				}
				break;
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
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, LolParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 113;
				this.match(LolParser.T__3);
				this.state = 114;
				this.expr(0);
				this.state = 115;
				this.match(LolParser.T__4);
				}
				break;
			case 2:
				{
				this.state = 117;
				this.functionCall();
				}
				break;
			case 3:
				{
				this.state = 118;
				this.match(LolParser.FLOAT);
				}
				break;
			case 4:
				{
				this.state = 119;
				this.match(LolParser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 134;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 132;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
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
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 125;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 126;
						_la = this._input.LA(1);
						if(!(_la===21 || _la===22)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 127;
						this.expr(7);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 128;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 129;
						this.comparisonOperator();
						this.state = 130;
						this.expr(6);
						}
						break;
					}
					}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
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
		case 11:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,26,138,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,4,0,26,8,0,11,0,12,0,27,1,0,1,0,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,3,1,39,8,1,1,2,1,2,1,2,1,2,3,2,45,8,2,1,3,1,3,1,3,1,3,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,3,4,59,8,4,3,4,61,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
	6,1,6,1,6,1,6,1,6,1,6,5,6,75,8,6,10,6,12,6,78,9,6,3,6,80,8,6,1,6,1,6,1,
	6,1,7,1,7,1,7,1,7,1,7,5,7,90,8,7,10,7,12,7,93,9,7,3,7,95,8,7,1,7,1,7,1,
	8,1,8,4,8,101,8,8,11,8,12,8,102,1,8,1,8,1,9,1,9,1,10,1,10,3,10,111,8,10,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,121,8,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,133,8,11,10,11,12,11,136,9,11,1,11,
	0,1,22,12,0,2,4,6,8,10,12,14,16,18,20,22,0,3,1,0,12,17,1,0,19,20,1,0,21,
	22,147,0,25,1,0,0,0,2,38,1,0,0,0,4,40,1,0,0,0,6,46,1,0,0,0,8,50,1,0,0,0,
	10,62,1,0,0,0,12,68,1,0,0,0,14,84,1,0,0,0,16,98,1,0,0,0,18,106,1,0,0,0,
	20,108,1,0,0,0,22,120,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,
	27,25,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,0,0,1,30,1,1,0,0,0,31,
	39,3,4,2,0,32,39,3,6,3,0,33,39,3,8,4,0,34,39,3,10,5,0,35,39,3,12,6,0,36,
	39,3,20,10,0,37,39,3,22,11,0,38,31,1,0,0,0,38,32,1,0,0,0,38,33,1,0,0,0,
	38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,3,1,0,0,0,40,
	41,5,1,0,0,41,44,5,23,0,0,42,43,5,2,0,0,43,45,3,22,11,0,44,42,1,0,0,0,44,
	45,1,0,0,0,45,5,1,0,0,0,46,47,5,23,0,0,47,48,5,2,0,0,48,49,3,22,11,0,49,
	7,1,0,0,0,50,51,5,3,0,0,51,52,5,4,0,0,52,53,3,22,11,0,53,54,5,5,0,0,54,
	60,3,16,8,0,55,58,5,6,0,0,56,59,3,8,4,0,57,59,3,16,8,0,58,56,1,0,0,0,58,
	57,1,0,0,0,59,61,1,0,0,0,60,55,1,0,0,0,60,61,1,0,0,0,61,9,1,0,0,0,62,63,
	5,7,0,0,63,64,5,4,0,0,64,65,3,22,11,0,65,66,5,5,0,0,66,67,3,16,8,0,67,11,
	1,0,0,0,68,69,5,8,0,0,69,70,5,23,0,0,70,79,5,4,0,0,71,76,5,23,0,0,72,73,
	5,9,0,0,73,75,5,23,0,0,74,72,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,
	1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,79,71,1,0,0,0,79,80,1,0,0,0,80,81,1,
	0,0,0,81,82,5,5,0,0,82,83,3,16,8,0,83,13,1,0,0,0,84,85,5,23,0,0,85,94,5,
	4,0,0,86,91,3,22,11,0,87,88,5,9,0,0,88,90,3,22,11,0,89,87,1,0,0,0,90,93,
	1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,94,86,1,
	0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,5,5,0,0,97,15,1,0,0,0,98,100,5,
	10,0,0,99,101,3,2,1,0,100,99,1,0,0,0,101,102,1,0,0,0,102,100,1,0,0,0,102,
	103,1,0,0,0,103,104,1,0,0,0,104,105,5,11,0,0,105,17,1,0,0,0,106,107,7,0,
	0,0,107,19,1,0,0,0,108,110,5,18,0,0,109,111,3,22,11,0,110,109,1,0,0,0,110,
	111,1,0,0,0,111,21,1,0,0,0,112,113,6,11,-1,0,113,114,5,4,0,0,114,115,3,
	22,11,0,115,116,5,5,0,0,116,121,1,0,0,0,117,121,3,14,7,0,118,121,5,24,0,
	0,119,121,5,23,0,0,120,112,1,0,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,
	119,1,0,0,0,121,134,1,0,0,0,122,123,10,7,0,0,123,124,7,1,0,0,124,133,3,
	22,11,8,125,126,10,6,0,0,126,127,7,2,0,0,127,133,3,22,11,7,128,129,10,5,
	0,0,129,130,3,18,9,0,130,131,3,22,11,6,131,133,1,0,0,0,132,122,1,0,0,0,
	132,125,1,0,0,0,132,128,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,
	1,0,0,0,135,23,1,0,0,0,136,134,1,0,0,0,14,27,38,44,58,60,76,79,91,94,102,
	110,120,132,134];

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
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
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


export class StatementContext extends ParserRuleContext {
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
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_statement;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
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
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
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
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
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
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
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
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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


export class BlockContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_block;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
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


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: LolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return LolParser.RULE_returnStatement;
	}
	public enterRule(listener: LolListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: LolListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
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
