Ext.data.JsonP.global_String({"tagname":"class","name":"global.String","autodetected":{},"files":[{"filename":"string.js","href":"string.html#global-String"}],"members":[{"name":"capitalize","tagname":"method","owner":"global.String","id":"method-capitalize","meta":{}},{"name":"capitalizeFirstLetter","tagname":"method","owner":"global.String","id":"method-capitalizeFirstLetter","meta":{}},{"name":"count","tagname":"method","owner":"global.String","id":"method-count","meta":{}},{"name":"format","tagname":"method","owner":"global.String","id":"method-format","meta":{}},{"name":"include","tagname":"method","owner":"global.String","id":"method-include","meta":{}},{"name":"padding","tagname":"method","owner":"global.String","id":"method-padding","meta":{}},{"name":"paddingLeft","tagname":"method","owner":"global.String","id":"method-paddingLeft","meta":{}},{"name":"paddingRight","tagname":"method","owner":"global.String","id":"method-paddingRight","meta":{}},{"name":"quotemeta","tagname":"method","owner":"global.String","id":"method-quotemeta","meta":{}},{"name":"repeat","tagname":"method","owner":"global.String","id":"method-repeat","meta":{}},{"name":"toArray","tagname":"method","owner":"global.String","id":"method-toArray","meta":{}},{"name":"toCRC32","tagname":"method","owner":"global.String","id":"method-toCRC32","meta":{}},{"name":"toDash","tagname":"method","owner":"global.String","id":"method-toDash","meta":{}},{"name":"toHash","tagname":"method","owner":"global.String","id":"method-toHash","meta":{}},{"name":"toObject","tagname":"method","owner":"global.String","id":"method-toObject","meta":{}},{"name":"trim","tagname":"method","owner":"global.String","id":"method-trim","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-global.String","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/string.html#global-String' target='_blank'>string.js</a></div></pre><div class='doc-contents'><h1>拡張した String クラス</h1>\n\n<p>文字列を扱う String クラスを拡張しています。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-capitalize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-capitalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-capitalize' class='name expandable'>capitalize</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>キャピタライズした文字列、すなわち、すべての単語の先頭を大文字にした文字列を返します。 ...</div><div class='long'><p>キャピタライズした文字列、すなわち、すべての単語の先頭を大文字にした文字列を返します。</p>\n\n<p>単語の先頭以外は小文字化されます。</p>\n\n<h3>Reference</h3>\n\n<ul>\n<li><a href=\"http://d.hatena.ne.jp/brazil/20051212/1134369083\">キャピタライズ(単語の先頭の大文字化)を行う - oct inaodu</a></li>\n<li><a href=\"http://design-program.blogspot.com/2011/02/javascript.html\">デザインとプログラムの狭間で: javascriptでキャピタライズ（一文字目を大文字にする）</a></li>\n</ul>\n\n\n<h3>Example</h3>\n\n<pre><code>\"i aM a pen.\".capitalize(); // =&gt; \"I Am A Pen.\"\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>キャピタライズした文字列</p>\n</div></li></ul></div></div></div><div id='method-capitalizeFirstLetter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-capitalizeFirstLetter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-capitalizeFirstLetter' class='name expandable'>capitalizeFirstLetter</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>先頭の文字を大文字にして、それ以外を小文字にした文字列を返します。 ...</div><div class='long'><p>先頭の文字を大文字にして、それ以外を小文字にした文字列を返します。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"i aM a pen.\".capitalizeFirstLetter(); // \"I am a pen.\"\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>先頭の文字を大文字にして、それ以外を小文字にした文字列</p>\n</div></li></ul></div></div></div><div id='method-count' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-count' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-count' class='name expandable'>count</a>( <span class='pre'>str</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>指定した文字列が何個入っているかをカウントして返します。 ...</div><div class='long'><p>指定した文字列が何個入っているかをカウントして返します。</p>\n\n<p>大文字・小文字は区別されます。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"This is a string. Isn't it?\".count(\"is\"); // =&gt; 2\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>調べる文字列</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>this に str が入っている個数</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-format' class='name expandable'>format</a>( <span class='pre'>obj</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>フォーマットに引数を適用した文字列を返します。 ...</div><div class='long'><p>フォーマットに引数を適用した文字列を返します。</p>\n\n<p>引数がオブジェクトの場合、\"{プロパティ名}\" がオブジェクトのプロパティの値に置き換わります。\n指定したプロパティがオブジェクトにない場合は空文字列になります。</p>\n\n<p>第1引数がオブジェクトでなかった場合、\"{整数}\" が各引数に置き換わります。\n指定した値の引数がなかった場合は空文字列になります。</p>\n\n<h3>Example</h3>\n\n<pre><code>obj = {r: 128, g: 0, b: 255};\n\"color: rgb({r}, {g}, {b});\".format(obj); // =&gt; \"color: rgb(128, 0, 255);\"\n\n\"{0} + {1} = {2}\".format(5, 8, (5+8)); // =&gt; \"5 + 8 = 13\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>パラメータとなるオブジェクト</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>生成した文字列</p>\n</div></li></ul></div></div></div><div id='method-include' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-include' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-include' class='name expandable'>include</a>( <span class='pre'>str</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>指定した文字列が含まれているかどうかを返します。 ...</div><div class='long'><p>指定した文字列が含まれているかどうかを返します。</p>\n\n<p>大文字・小文字は区別されます。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"This is a string.\".include(\"is\"); // =&gt; true\n\"This is a string.\".include(\"was\"); // =&gt; false\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>調べる文字列</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>含まれているかどうか</p>\n</div></li></ul></div></div></div><div id='method-padding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-padding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-padding' class='name expandable'>padding</a>( <span class='pre'>figure, [ch]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>左に文字を埋めて指定した桁にします。this の文字列は右寄せされます。 ...</div><div class='long'><p>左に文字を埋めて指定した桁にします。this の文字列は右寄せされます。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"1234\".padding(10);      // =&gt; \"      1234\"\n\"1234\".padding(10, '0'); // =&gt; \"0000001234\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Number<div class='sub-desc'><p>桁数</p>\n\n</div></li><li><span class='pre'>ch</span> : String (optional)<div class='sub-desc'><p>埋める文字</p>\n\n<p>Defaults to: <code>&quot; &quot;</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>指定した桁の文字列</p>\n\n</div></li></ul></div></div></div><div id='method-paddingLeft' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-paddingLeft' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-paddingLeft' class='name expandable'>paddingLeft</a>( <span class='pre'>figure, [ch]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>左に文字を埋めて指定した桁にします。this の文字列を右寄せされます。 ...</div><div class='long'><p>左に文字を埋めて指定した桁にします。this の文字列を右寄せされます。</p>\n\n<p><a href=\"#!/api/global.String-method-padding\" rel=\"global.String-method-padding\" class=\"docClass\">padding</a> と同じです。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Number<div class='sub-desc'><p>桁数</p>\n\n</div></li><li><span class='pre'>ch</span> : String (optional)<div class='sub-desc'><p>埋める文字</p>\n\n<p>Defaults to: <code>&quot; &quot;</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>指定した桁の文字列</p>\n\n</div></li></ul></div></div></div><div id='method-paddingRight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-paddingRight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-paddingRight' class='name expandable'>paddingRight</a>( <span class='pre'>figure, [ch]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>右に文字を埋めて指定した桁にします。this の文字列は左寄せされます。 ...</div><div class='long'><p>右に文字を埋めて指定した桁にします。this の文字列は左寄せされます。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"1234\".paddingRight(10);      // =&gt; \"1234      \"\n\"1234\".paddingRight(10, '0'); // =&gt; \"1234000000\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Number<div class='sub-desc'><p>桁数</p>\n</div></li><li><span class='pre'>ch</span> : String (optional)<div class='sub-desc'><p>埋める文字</p>\n<p>Defaults to: <code>&quot; &quot;</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>指定した桁の文字列</p>\n</div></li></ul></div></div></div><div id='method-quotemeta' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-quotemeta' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-quotemeta' class='name expandable'>quotemeta</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>正規表現のメタ文字をクォートします。 ...</div><div class='long'><p>正規表現のメタ文字をクォートします。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"Hello world. (can you hear me?)\".quotemeta(); // =&gt; \"Hello\\\\ world\\\\.\\\\ \\\\(can\\\\ you\\\\ hear\\\\ me\\\\?\\\\)\"\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>クォートされた文字列</p>\n</div></li></ul></div></div></div><div id='method-repeat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-repeat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-repeat' class='name expandable'>repeat</a>( <span class='pre'>n</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>自分自身を指定した回数だけ繰り返した文字列を返します。 ...</div><div class='long'><p>自分自身を指定した回数だけ繰り返した文字列を返します。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"Abc\".repeat(4); // =&gt; \"AbcAbcAbcAbc\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>繰り返し回数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>文字列</p>\n</div></li></ul></div></div></div><div id='method-toArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-toArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-toArray' class='name expandable'>toArray</a>( <span class='pre'></span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>1文字ずつ分解した配列を返します。 ...</div><div class='long'><p>1文字ずつ分解した配列を返します。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"12345\".toArray(); // =&gt; [\"1\", \"2\", \"3\", \"4\", \"5\"]\n\"あいうえお\".toArray(); // =&gt; \"あ\", \"い\", \"う\", \"え\", \"お\"]\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>配列</p>\n</div></li></ul></div></div></div><div id='method-toCRC32' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-toCRC32' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-toCRC32' class='name expandable'>toCRC32</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>文字列の CRC32 を計算します。 ...</div><div class='long'><p>文字列の CRC32 を計算します。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"phina.js\".toCRC32(); // =&gt; 2676327394\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>CRC32 ハッシュ値</p>\n</div></li></ul></div></div></div><div id='method-toDash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-toDash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-toDash' class='name expandable'>toDash</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>文字列内の大文字を「\"-\" + 小文字」に変換します。 ...</div><div class='long'><p>文字列内の大文字を「\"-\" + 小文字」に変換します。</p>\n\n<p>css2properties（element.style）の各プロパティ名を CSS のプロパティ名に変換する場合に便利です。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"borderTopColor\".toDash(); // =&gt; \"border-top-color\"\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>変換後の文字列</p>\n</div></li></ul></div></div></div><div id='method-toHash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-toHash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-toHash' class='name expandable'>toHash</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>ハッシュ値を生成して返します。 ...</div><div class='long'><p>ハッシュ値を生成して返します。</p>\n\n<h3>Example</h3>\n\n<pre><code>\"phina.js\".toHash(); // =&gt; 2676327394\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>CRC32ハッシュ値</p>\n</div></li></ul></div></div></div><div id='method-toObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>[sep], [eq]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>キーと値の組み合わせが連結された文字列からオブジェクトを生成します。 ...</div><div class='long'><p>キーと値の組み合わせが連結された文字列からオブジェクトを生成します。</p>\n\n<p>値は Number、Boolean、String のいずれかの型として評価されます。</p>\n\n<h3>Example</h3>\n\n<pre><code>obj1 = \"num=128.5&amp;flag1=true&amp;flag2=false&amp;str=hoge\";\nobj1.toObject(); // =&gt; {num: 128.5, flag1: true, flag2: false, str: \"hoge\" }\n\nobj2 = \"num:-64.5|flag1:false|flag2:true|str:foo\";\nobj2.toObject('|', ':'); // =&gt; {num: -64.5, flag1: false, flag2: true, str: \"foo\" }\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sep</span> : String (optional)<div class='sub-desc'><p>セパレータ文字</p>\n<p>Defaults to: <code>&quot;&amp;&quot;</code></p></div></li><li><span class='pre'>eq</span> : String (optional)<div class='sub-desc'><p>キーと値の組み合わせを表す文字</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>オブジェクト</p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.String'>global.String</span><br/><a href='source/string.html#global-String-method-trim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.String-method-trim' class='name expandable'>trim</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>文字列先頭と末尾の空白文字を全て取り除いた文字列を返します。 ...</div><div class='long'><p>文字列先頭と末尾の空白文字を全て取り除いた文字列を返します。</p>\n\n<h3>Reference</h3>\n\n<ul>\n<li><a href=\"http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/\">String Functions for Javascript – trim, to camel case, to dashed, and to underscore</a></li>\n</ul>\n\n\n<h3>Example</h3>\n\n<pre><code>\"  Hello, world!  \".trim(); // =&gt; \"Hello, world!\"\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>トリムした結果の文字列</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});