---
description: Query a REST API from Appsmith.
---

# REST API

This page describes how to connect your application to a REST API and use queries to read and write data in your applications.

Use this datasource to create a single query for an API that doesn't need complex authentication settings. If you plan to create multiple queries for the same API, you may want to use an [Authenticated API](/connect-data/reference/rest-api) datasource. Every query created from an Authenticated API datasource shares configuration (root URL, authentication, headers, and so on) to avoid re-entering details.

## Query REST API

The following section is a reference guide that provides a description of the parameters to create REST API queries.

<figure>
  <img src="/img/restapi-query-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring a REST API query."/>
  <figcaption align = "center"><i>Configuring a REST API query.</i></figcaption>
</figure>

<dl>  
  <dt><b>Method</b></dt>
  <dd>Sets the REST method (<code>GET</code>, <code>POST</code>, etc.) to use for the request.</dd>
</dl>

<dl>  
  <dt><b>URL</b></dt>
  <dd>Sets the endpoint to query.</dd>
</dl>

<dl>  
  <dt><b>Headers</b></dt>
  <dd>Sets key/value pairs to send in the request header.</dd>
  <dd><em>To learn how to set up dynamic headers, visit and fork this <a href="https://app.appsmith.com/applications/6200ac292cd3d95ca414dc4f/pages/624eda0551a8863d6c406760">sample app</a></em>.</dd>
</dl>

<dl>
  <dt><b>Params</b></dt>
  <dd>Sets key/value pairs to send as query parameters in the request.</dd>
</dl>

<dl>
  <dt><b>Body</b></dt>
  <dd>Appsmith supports a variety of encoding types for sending data in API queries. The encoding type can be selected via the Body dropdown on the API editor.<br/>
  </dd>
  <dd><i>Options:</i>
    <ul>
      <li><b>None:</b> Omits a body from the request.</li>
      <li><b>JSON:</b> Expects a JSON object to send as the body.</li>
    </ul>

<dd><pre>{` 
{
  "q": {{ UsersTable.searchText }},
  "limit": {{ UsersTable.pageSize }},
  "offset": {{ UsersTable.pageOffset }}
}
`}</pre>
In the example above, values are collected from a [Table widget](/reference/widgets/table) and passed into a JSON object.</dd>
    <ul>
      <li><b>FORM_URLENCODED:</b> Expects key/value pairs to be encoded into FORM_URLENCODED format as the body.</li>
    </ul>
<dd>

|  Key     |  Value                        |
|----------|-------------------------------|
| query    | `{{ UsersTable.searchText }}` |
| limit    | `{{ UsersTable.pageSize }}`   |
| offset   | `{{ UsersTable.pageOffset }}` |

<pre>{`// result
"query=arjun&limit=10&offset=20"
`}</pre>
<p>Selecting <b>FORM_URLENCODED</b> (for <code>application/x-www-form-urlencoded</code>) automatically encodes your key/value pairs for sending in the request body.</p></dd>
    <ul>
      <li><b>MULTIPART_FORM_DATA:</b> Expects key/value pairs with a data type to be encoded into MULTIPART_FORM_DATA format as the body. Multipart requests can include several different types of data within them, such as a file along with some other related metadata.</li>
    </ul>
<dd>

|  Key     | Type |  Value                        |
|----------|------|-------------------------------|
| user     | Text | `{{ appsmith.user.email }}`   |
| filename | Text | `{{ FileNameInput.text }}`    |
| file     | File | `{{ Filepicker.files[0] }}`   |

<pre>{`// result
"query=arjun&limit=10&offset=20"
`}</pre>
<p>Above, values of multiple types are pulled from widgets and added to the query, including file data from a <a href="/reference/widgets/filepicker">Filepicker widget</a>.</p>

:::tip
When uploading file data, check that your Filepicker widget's **Data Format** property is set correctly. When uploading as multipart/form-data, this should usually be set to `Binary`.
:::
</dd>
    <ul>
      <li><b>RAW:</b> Expects raw binary file data to be sent as the body.</li>
    </ul>
      <dd><pre>{`{{ Filepicker1.files[0]?.data }}
`}</pre>
<p>Use <b>RAW</b> if your endpoint can't accept multipart-encoded data and requires raw body binary instead. Above, the <code>data</code> property of the file is passed to the query instead of the file object itself because the endpoint expects only raw binary data.</p>

:::caution tip
Be sure to turn off **JSON Smart Substitution** for this query in the [query settings](/connect-data/reference/query-settings). This option usually helps cast data into correct JSON, but it is problematic when used with RAW binary.
:::
</dd>

  </dd>  
</dl>

<dl>
  <dt><b>Pagination</b></dt>
  <dd><i>Options:</i>
    <ul>
      <li><b>None:</b> Doesn't use any pagination.</li>
      <li><b>Paginate with Table Page No:</b> Use when your API expects an offset or increment value to determine which set of records to return. Follow the instructions that appear on the platform, or see <a href="/reference/widgets/table?current-edition=Offset_edition#server-side-pagination">Offset-based pagination</a> for more information.</li>
      <li><b>Paginate with Response URL:</b> Use when your API returns cursor values to page through data. The <b>Previous URL</b> and <b>Next URL</b> fields expect the cursor values from the query response. For more information, see <a href="/reference/widgets/table?current-edition=Cursor#server-side-pagination">Cursor-based pagination</a>.</li>
    </ul>
  </dd>
</dl>

<dl>
  <dt><b>Authentication</b></dt>
  <dd><em>Click the button in this tab to turn this query into a new Authenticated API datasource where you can configure Authentication for your requests.</em></dd>
</dl>

## Troubleshooting

[Missing URL](/help-and-support/troubleshooting-guide/action-errors/rest-api-errors#missing-url-error)<br />
[Missing client secret / client ID / access token](/help-and-support/troubleshooting-guide/action-errors/rest-api-errors#missing-client-secret--client-id--access-token-error)<br />
[Secret key required](/help-and-support/troubleshooting-guide/action-errors/rest-api-errors#secret-key-required-error)

If you experience difficulties, contact the support team using the chat widget at the bottom right of this page.

## See also

* [Data access and binding](/core-concepts/data-access-and-binding)

