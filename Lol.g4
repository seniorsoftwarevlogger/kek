grammar Lol;

options {
	language = TypeScript;
}

prog: statements+ EOF;

statements:
	varDeclaration
	| varAssignment
	| ifStatement
	| whileStatement
	| functionDeclaration
	| expr;

varDeclaration: 'var' ID | 'var' ID '=' expr;
varAssignment: ID '=' expr;

ifStatement: 'if' '(' expr ')' '{' statements+ '}';

whileStatement: 'while' '(' expr ')' '{' statements+ '}';

functionDeclaration:
	'function' ID '(' ID* ')' '{' statements+ '}';
functionCall: ID '(' arg* ')';

comparisonOperator: '==' | '!=' | '<' | '>' | '<=' | '>=';
returnExpr: 'return' expr;

expr:
	expr ('*' | '/') expr /* Precedence 1 */
	| expr ('+' | '-') expr
	| expr comparisonOperator expr
	| '(' expr ')'
	| functionCall
	| returnExpr
	| FLOAT
	| ID;

arg: (ID | FLOAT);
ID: [a-zA-Z_][a-zA-Z0-9_]*;
FLOAT: [0-9]+ ('.' [0-9]+)?;
WS: [ \t\r\n]+ -> skip;