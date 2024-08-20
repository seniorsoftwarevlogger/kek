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
	public static readonly ID = 18;
	public static readonly FLOAT = 19;
	public static readonly WS = 20;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_statements = 1;
	public static readonly RULE_varDeclaration = 2;
	public static readonly RULE_varAssignment = 3;
	public static readonly RULE_ifStatement = 4;
	public static readonly RULE_comparisonOperator = 5;
	public static readonly RULE_expr = 6;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statements", "varDeclaration", "varAssignment", "ifStatement", 
		"comparisonOperator", "expr",
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
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 14;
				this.statements();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 786458) !== 0));
			this.state = 19;
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
			this.state = 25;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 21;
				this.varDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 22;
				this.varAssignment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 23;
				this.ifStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 24;
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
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 27;
				this.match(LolParser.T__0);
				this.state = 28;
				this.match(LolParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 29;
				this.match(LolParser.T__0);
				this.state = 30;
				this.match(LolParser.ID);
				this.state = 31;
				this.match(LolParser.T__1);
				this.state = 32;
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
			this.state = 35;
			this.match(LolParser.ID);
			this.state = 36;
			this.match(LolParser.T__1);
			this.state = 37;
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
			this.state = 39;
			this.match(LolParser.T__2);
			this.state = 40;
			this.match(LolParser.T__3);
			this.state = 41;
			this.expr(0);
			this.state = 42;
			this.match(LolParser.T__4);
			this.state = 43;
			this.match(LolParser.T__5);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 44;
				this.statements();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 786458) !== 0));
			this.state = 49;
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
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LolParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16128) !== 0))) {
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
		let _startState: number = 12;
		this.enterRecursionRule(localctx, 12, LolParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				{
				this.state = 54;
				this.match(LolParser.T__3);
				this.state = 55;
				this.expr(0);
				this.state = 56;
				this.match(LolParser.T__4);
				}
				break;
			case 19:
				{
				this.state = 58;
				this.match(LolParser.FLOAT);
				}
				break;
			case 18:
				{
				this.state = 59;
				this.match(LolParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 72;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 62;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 63;
						_la = this._input.LA(1);
						if(!(_la===14 || _la===15)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 64;
						this.expr(7);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 65;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 66;
						_la = this._input.LA(1);
						if(!(_la===16 || _la===17)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 67;
						this.expr(6);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LolParser.RULE_expr);
						this.state = 68;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 69;
						this.comparisonOperator();
						this.state = 70;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
		case 6:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,20,78,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,
	17,1,0,1,0,1,1,1,1,1,1,1,1,3,1,26,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,34,8,
	2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,4,4,46,8,4,11,4,12,4,47,1,4,1,
	4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,61,8,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,1,6,5,6,73,8,6,10,6,12,6,76,9,6,1,6,0,1,12,7,0,2,4,6,8,10,
	12,0,3,1,0,8,13,1,0,14,15,1,0,16,17,81,0,15,1,0,0,0,2,25,1,0,0,0,4,33,1,
	0,0,0,6,35,1,0,0,0,8,39,1,0,0,0,10,51,1,0,0,0,12,60,1,0,0,0,14,16,3,2,1,
	0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,19,1,0,0,0,
	19,20,5,0,0,1,20,1,1,0,0,0,21,26,3,4,2,0,22,26,3,6,3,0,23,26,3,8,4,0,24,
	26,3,12,6,0,25,21,1,0,0,0,25,22,1,0,0,0,25,23,1,0,0,0,25,24,1,0,0,0,26,
	3,1,0,0,0,27,28,5,1,0,0,28,34,5,18,0,0,29,30,5,1,0,0,30,31,5,18,0,0,31,
	32,5,2,0,0,32,34,3,12,6,0,33,27,1,0,0,0,33,29,1,0,0,0,34,5,1,0,0,0,35,36,
	5,18,0,0,36,37,5,2,0,0,37,38,3,12,6,0,38,7,1,0,0,0,39,40,5,3,0,0,40,41,
	5,4,0,0,41,42,3,12,6,0,42,43,5,5,0,0,43,45,5,6,0,0,44,46,3,2,1,0,45,44,
	1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,
	7,0,0,50,9,1,0,0,0,51,52,7,0,0,0,52,11,1,0,0,0,53,54,6,6,-1,0,54,55,5,4,
	0,0,55,56,3,12,6,0,56,57,5,5,0,0,57,61,1,0,0,0,58,61,5,19,0,0,59,61,5,18,
	0,0,60,53,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,74,1,0,0,0,62,63,10,6,
	0,0,63,64,7,1,0,0,64,73,3,12,6,7,65,66,10,5,0,0,66,67,7,2,0,0,67,73,3,12,
	6,6,68,69,10,4,0,0,69,70,3,10,5,0,70,71,3,12,6,5,71,73,1,0,0,0,72,62,1,
	0,0,0,72,65,1,0,0,0,72,68,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,
	0,0,75,13,1,0,0,0,76,74,1,0,0,0,7,17,25,33,47,60,72,74];

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
