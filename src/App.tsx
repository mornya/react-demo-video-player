import React from 'react';
import { Link /* Route, Redirect, Switch */ } from 'react-router-dom';
import { YouTube, Vimeo } from '@mornya/react-player-libs';
import './App.scss';

/**
 * This is an app of entries.
 *
 * React-Router v4 example:
 *
 * <div>
 *   <Route exact path="/" component={Home}>
 *   <Route path="/about" component={About}/>
 *   <Switch>
 *     <Redirect from="/me/project1" to="/project/1"/>
 *     <Redirect from="/me/project2" to="/project/2"/>
 *   </Switch>
 *   <Route exact path="/project" component={Project} />
 *   <Route path="/project/:no" component={Project} />
 * </div>
 */
export default function App () {
  return (
    <div className="app-wrapper">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <a href="https://www.npmjs.com/package/@mornya/react-vessel" target="_blank" rel="noopener noreferrer">React Vessel</a>
          </li>
          <li>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a>
          </li>
        </ul>
      </nav>

      <header>
        <h1>React Demo</h1>
        <h2>Video Player library</h2>
        <p>YouTube and Vimeo player library is now ready!</p>
        <br/><br/>

        <table>
          <tbody>
            <tr>
              <th colSpan={2}>YouTube</th>
            </tr>
            <tr>
              <td>
                <YouTube
                  videoId="HcDkjQTlukM"
                  autoplay
                  controls
                  onReady={data => console.log('[YouTube/1] READY:', data.getVideoData())}
                  onStateChange={(status, data) => console.log('[YouTube/1] STATE CHANGED:', status, data)}
                  onFinish={() => console.log('[YouTube/1] FINISHED')}
                  onError={err => console.log('[YouTube/1] ERRORED', err)}
                />
              </td>
              <td>
                <YouTube
                  videoId="oTKTYWlYofs"
                  autoplay
                  onReady={origin => console.log('[YouTube/2] READY:', origin.getVideoData())}
                  onStateChange={(status, data) => console.log('[YouTube/2] STATE CHANGED:', status, data)}
                  onFinish={() => console.log('[YouTube/2] FINISHED')}
                  onError={err => console.log('[YouTube/2] ERRORED', err)}
                />
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Vimeo</th>
            </tr>
            <tr>
              <td>
                <Vimeo
                  videoId="151575579"
                  autoplay
                  controls
                  onReady={(playbackInfo) => console.log('[Vimeo/1] READY:', playbackInfo)}
                  onStateChange={(status, playbackInfo) => console.log('[Vimeo/1] STATE CHANGED:', status, playbackInfo)}
                  onFinish={() => console.log('[Vimeo/1] FINISHED')}
                  onError={err => console.log('[Vimeo/1] ERRORED', err)}
                />
              </td>
              <td>
                <Vimeo
                  videoId="191947042"
                  onReady={(playbackInfo) => console.log('[Vimeo/2] READY:', playbackInfo)}
                  onStateChange={(status, playbackInfo) => console.log('[Vimeo/2] STATE CHANGED:', status, playbackInfo)}
                  onFinish={() => console.log('[Vimeo/2] FINISHED')}
                  onError={err => console.log('[Vimeo/2] ERRORED', err)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <br/><br/>
      </header>

      <footer>
        Copyright 2020. mornya. All rights reserved.
      </footer>
    </div>
  );
}
