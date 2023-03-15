# Streamtape.js

Node API wrapper for [Streamtape](https://streamtape.com).

<br>

### Install

```npm i streamtape```

<br>

### Methods

#### For use in a project

const st = require("streamtape")

#### For use in a module
import st from "streamtape"

<br>


### download() Generates direct download link

#### Params: [url, user, pass]

~~~
await st.download(url, user, pass)
    .then(console.log)
    .catch((error) => console.log(error))
~~~

Get user & pass from [Streamtape](https://streamtape.com/accpanel).

<br>

### Uninstall

```npm uninstall streamtape```

<br>


    Copyright (C) 2023  Zubin

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

