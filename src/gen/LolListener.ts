// Generated from Lol.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./LolParser.js";
import { StatementContext } from "./LolParser.js";
import { VarDeclarationContext } from "./LolParser.js";
import { VarAssignmentContext } from "./LolParser.js";
import { IfStatementContext } from "./LolParser.js";
import { WhileStatementContext } from "./LolParser.js";
import { FunctionDeclarationContext } from "./LolParser.js";
import { FunctionCallContext } from "./LolParser.js";
import { BlockContext } from "./LolParser.js";
import { ComparisonOperatorContext } from "./LolParser.js";
import { ReturnStatementContext } from "./LolParser.js";
import { ExprContext } from "./LolParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LolParser`.
 */
export default class LolListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LolParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.varAssignment`.
	 * @param ctx the parse tree
	 */
	enterVarAssignment?: (ctx: VarAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.varAssignment`.
	 * @param ctx the parse tree
	 */
	exitVarAssignment?: (ctx: VarAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

