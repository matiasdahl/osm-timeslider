
## OpenStreetMap

The markers displayed by the `osm-timeslider` visualization are extracted from the 10/2015 OpenStreetMap snapshot. The OpenStreetMap data is &copy; OpenStreetMap contributors, and available under the terms of the [ODbL](www.openstreetmap.org/copyright). For further details about the data shown in the visualizations, please see the [README](./data/README.md) file in the `data` directory.

The interactive map is drawn using the [Leaflet library](http://leafletjs.com/) (see below for its license) using the [Positron tiles](https://cartodb.com/basemaps) (tiles &copy; CartoDB, CC BY 3.0).

## osm-timeslider visualization

The below source files 

- public/css/main.css
- public/src/(all .js files)
- public/index.html
- scripts/(all files)

for the `osm-timeslider` visualization are released under the following license (see [opensource.org/licenses/BSD-2-Clause](http://opensource.org/licenses/BSD-2-Clause)):

>Copyright (c) 2015, Matias Dahl.
>All rights reserved.
>
>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
>
>1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
>
>2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
>
>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
>

In addition, the visualization makes use of the file [public/css/slider.css](./public/css/slider.css). This is a modified version of the file [css/iThing.css](https://github.com/ghusse/jQRangeSlider/blob/master/css/iThing.css) in the [jQRangeSlider 5.7.1](https://github.com/ghusse/jQRangeSlider) library, which is used here under the MIT license (see below for the license text). The modifications to `iThing.css` are (c) Matias Dahl, 2015 and these modifications are also released under the MIT license. See the [modified file](./public/css/slider.css) for further details.

Please be aware that the `osm-timeslider` repository contains many files that are not covered by the license quoted above. For example, the screenshots shown in the main [README](./README.md) are subject to the terms of the ODbL and CC BY 3.0, see above.

## Open source libraries

The `osm-timeslider` visualization makes use of a number of open source libraries:

#### jQRangeSlider 5.7.1 ([github.com/ghusse/jQRangeSlider](https://github.com/ghusse/jQRangeSlider))

jQRangeSlider 5.7.1 is dual licensed under GPL/MIT. It is used here under the terms of the MIT license. License file (MIT-license.txt):

<blockquote>
<p>Copyright (c) 2012 Guillaume Gautreau</p>
<p>Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
&quot;Software&quot;), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:</p>
<p>The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</blockquote>


#### SpinKit 1.2.2 ([github.com/tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit)) 

License file:

<blockquote>
<p>The MIT License (MIT)</p>
<p>Copyright (c) 2014 Tobias Ahlin</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the &quot;Software&quot;), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</blockquote>


#### jQuery modal 0.5.9 ([github.com/kylefox/jquery-modal](https://github.com/kylefox/jquery-modal))

License file:

<blockquote>
<p>jQuery Modal is distributed under the MIT License.
Learn more at <a href="http://opensource.org/licenses/mit-license.php">http://opensource.org/licenses/mit-license.php</a></p>
<hr>
<p>Copyright (c) 2012 Kyle Fox</p>
<p>Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
&quot;Software&quot;), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:</p>
<p>The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</blockquote>


#### Leaflet 1.0.0-beta.2 ([github.com/Leaflet/Leaflet](https://github.com/Leaflet/Leaflet))
  
License file:

<blockquote>
<p>Copyright (c) 2010-2015, Vladimir Agafonkin
Copyright (c) 2010-2011, CloudMade
All rights reserved.</p>
<p>Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:</p>
<ol>
<li><p>Redistributions of source code must retain the above copyright notice, this list of
conditions and the following disclaimer.</p>
</li>
<li><p>Redistributions in binary form must reproduce the above copyright notice, this list
of conditions and the following disclaimer in the documentation and/or other materials
provided with the distribution.</p>
</li>
</ol>
<p>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>
</blockquote>


