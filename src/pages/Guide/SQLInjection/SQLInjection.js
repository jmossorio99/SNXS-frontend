import {Link, Route, Routes} from "react-router-dom";
import classes from "../SQLInjection/SQLInjection.module.css";
import Card from "../../../components/UI/Card/Card";
import SqlInjectionType from "./SQLInjectionType";
import {Fragment} from "react";

const SqlInjection = () => {

    const sqlHome = (<section className={classes.content}>
        <div className={classes.title}>
            <h1>SQL Injection</h1>
        </div>
        <Card>
            <h2>Definition:</h2>
            <p>
                Consists of insertion or “injection” of a SQL query via the input
                data from the client to the application.
            </p>
            <h2>Consequences:</h2>
            <ul>
                <li>Modifications to data</li>
                <li>Access to data</li>
                <li>Unauthorized execution of commands</li>
                <li>Privileges obtention</li>
            </ul>
            <h2>Techniques Identifiable:</h2>
            <ul>
                <li><Link to={'boolean-based'}>Boolean-based blind</Link></li>
                <li><Link to={'time-based'}>Time-based blind</Link></li>
                <li><Link to={'error-based'}>Error-based</Link></li>
                <li><Link to={'union-based'}>UNION query-based</Link></li>
                <li><Link to={'stack-queries-based'}>Stacked queries</Link></li>
            </ul>
            <h2>Mitigation</h2>
            <h2>Sources and further reading:</h2>
            <ul>
                <li><a href={'https://capec.mitre.org/data/definitions/66.html'}>CAPEC-66: SQL Injection</a></li>
                <li><a href={'https://owasp.org/www-community/attacks/SQL_Injection'}>SQL Injection - OWASP</a></li>
                <li><a href={'https://github.com/sqlmapproject/sqlmap/wiki/Techniques'}>sqlmap user guide
                    techniques</a></li>
            </ul>
        </Card>
    </section>);

    const booleanBased = <SqlInjectionType
        title={<h1>Boolean Based Blind SQLi</h1>}
        definition={<p>
            Boolean based SQL injection is a type of SQL injection where the attacker controls the value of a
            boolean parameter.
            The attacker sends a SQL query which forces the application to return a different result
            via the addition of a boolean value using a comparison
        </p>}
        sample={<Fragment><p>The following URL represents a query to a web page:</p>
            <p>http://newspaper.com/items.php?id=2</p>
            <p>This translates to the following SQL query:</p>
            <code>SELECT (specified_parameters) FROM items WHERE id = 2</code>
            <p>A hacker may test the following query and if the page doesn't return false the application is
                vulnerable</p>
            <p>http://newspaper.com/items.php?id=2 and 1=2</p>
            <p>Once this is verified, a truthy expression (i.e. ‘and 1=1’) can be used to obtain
                valuable data and or metadata form the application</p></Fragment>}
        sources={<ul>
            <li><a href={'https://owasp.org/www-community/attacks/Blind_SQL_Injection'}>Blind SQL Injection - OWASP</a>
            </li>
            <li><a href={'https://www.acunetix.com/websitesecurity/blind-sql-injection/'}>What are Blind SQL Injections
                - Acunetix</a></li>
        </ul>}/>;

    const timeBased = <SqlInjectionType
        title={<h1>Time based blind SQLi</h1>}
        definition={<p>
            Sends a SQL query which forces the application to wait for an amount of time
            before responding.
        </p>}
        sample={<Fragment><p>The following URL represents a query to a web page:</p>
            <p>http://newspaper.com/items.php?id=2</p>
            <p>This translates to the following SQL query:</p>
            <code>SELECT (specified_parameters) FROM items WHERE id = 2</code>
            <p>A hacker may test the following query and if the page response is delayed by
                10 seconds, the application is vulnerable:</p>
            <p>http://newspaper.com/items.php?id=2 and if(1=1, sleep(10), false)</p>
            <p>Once this is verified, a hacker may enumerate passwords via tracking the
                delay in response-time.</p></Fragment>}
        sources={<ul>
            <li><a href={'https://owasp.org/www-community/attacks/Blind_SQL_Injection'}>Blind SQL Injection - OWASP</a>
            </li>
            <li><a href={'https://www.acunetix.com/websitesecurity/blind-sql-injection/'}>What are Blind SQL Injections
                - Acunetix</a></li>
        </ul>}/>;

    const errorBased = <SqlInjectionType
        title={<h1>Error based SQLi</h1>}
        definition={<p>
            Sends a SQL query which returns an error message from the database
            indicating its vulnerability.
        </p>}
        sample={<Fragment><p>The following URL represents a query to a web page:</p>
            <p>http://newspaper.com/items.php?id=2</p>
            <p>This translates to the following SQL query:</p>
            <code>SELECT (specified_parameters) FROM items WHERE id = 2</code>
            <p>A hacker may test the following query and if the page response contains an
                error message referring to the syntax of the query, the page is vulnerable:</p>
            <p>http://newspaper.com/items.php?id=2’</p>
            <p>Once this is verified, a hacker may concatenate further SQL commands.</p></Fragment>}
        sources={<ul>
            <li><a href={'https://beaglesecurity.com/blog/vulnerability/error-based-sql-injection.html'}>Error based SQL
                Injection - Beagle Security</a></li>
            <li><a href={'https://www.acunetix.com/websitesecurity/sql-injection2/'}>Types of SQL Injection -
                Acunetix</a></li>
            <li><a href={'https://www.indusface.com/blog/types-of-sql-injection/#Error_Based_SQL_Injection'}>Types of
                SQL Injection - Indusface</a></li>
        </ul>}/>;

    const unionBased = <SqlInjectionType
        title={<h1>Union query based SQLi</h1>}
        definition={<p>
            Sends a SQL query which contains the UNION operator which requires a
            correct table name and the same amount of columns.
        </p>}
        sample={<Fragment><p>The following query represents the base query done:</p>
            <code>SELECT name, description, price FROM products WHERE category=1</code>
            <p>The following UNION query would count as a proper injection</p>
            <code>SELECT name, description, price FROM products WHERE category=1
                AND 1=2 UNION SELECT username, password, 1 FROM members </code>
            <p>The 1=2 evaluates to false hence invalidating the original query and the new
                query has the same amount of columns as the original. The amount of
                columns can be obtained by trial and error usage of ORDER By and checking
                the error messages. An existing table can be obtained via testing common
                table names and once again checking the error messages.</p></Fragment>}
        sources={<ul>
            <li><a href={'https://www.sqlinjection.net/union/'}>SQL Injection Using UNION - Sqlinjection.net</a></li>
            <li><a href={'https://portswigger.net/web-security/sql-injection/union-attacks'}>SQL injection UNION attacks
                - PortSwigger</a></li>
        </ul>}/>;

    const stackQueriesBased = <SqlInjectionType
        title={<h1>Stacked queries based SQLi</h1>}
        definition={<p>
            Sends a semicolon which terminates the original SQL statement and injects
            a new one.
        </p>}
        sample={<Fragment><p>The following string represents a sample input by a hacker:</p>
            <code>10; DROP members --</code>
            <p>The following SQL query results after receiving the input:</p>
            <code>SELECT * FROM products WHERE id = 10; DROP members --</code>
            <p>The resulting query eliminates the table members and invalidates the oroginal
                set by the application.</p></Fragment>}
        sources={<ul>
            <li><a
                href={'https://beaglesecurity.com/blog/vulnerability/stacked-queries-sql-injection.html#:~:text=A%20semicolon(%3B)%20is%20used,massively%20used%20SQL%20injection%20attack'}>Stacked
                Queries SQL Injection - Beagle Security</a></li>
            <li><a href={'https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/'}>SQL Injection Cheat
                Sheet - Netsparker</a></li>
        </ul>}/>;

    return (
        <Routes>
            <Route path={'/'} element={sqlHome}/>
            <Route path={'boolean-based'} element={booleanBased}/>
            <Route path={'time-based'} element={timeBased}/>
            <Route path={'error-based'} element={errorBased}/>
            <Route path={'union-based'} element={unionBased}/>
            <Route path={'stack-queries-based'} element={stackQueriesBased}/>
        </Routes>

    );
};

export default SqlInjection;