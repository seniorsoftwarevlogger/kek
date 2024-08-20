grammar Lol;

prog: statements+ EOF;

statements: varDeclaration | varAssignment | ifStatement | expr;

varDeclaration: 'var' ID | 'var' ID '=' expr;
varAssignment: ID '=' expr;

ifStatement: 'if' '(' expr ')' '{' statements+ '}';

comparisonOperator: '==' | '!=' | '<' | '>' | '<=' | '>=';

expr:
	expr ('*' | '/') expr /* Precedence 1 */
	| expr ('+' | '-') expr
	| expr comparisonOperator expr
	| '(' expr ')'
	| FLOAT
	| ID;

ID: [a-zA-Z_][a-zA-Z0-9_]*;
FLOAT: [0-9]+ ('.' [0-9]+)?;
WS: [ \t\r\n]+ -> skip;