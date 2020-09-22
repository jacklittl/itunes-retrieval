import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import ListItem from './ListItem';

configure({adapter: new Adapter()});

const result = {
  artistId: 6906197,
  artistName: "Foo Fighters",
  artistViewUrl: "https://music.apple.com/us/artist/foo-fighters/6906197?uo=4",
  artworkUrl30: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/e4/23/35/e4233532-42dc-7ece-d18b-b9b2733cb4e6/source/30x30bb.jpg",
  artworkUrl60: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/e4/23/35/e4233532-42dc-7ece-d18b-b9b2733cb4e6/source/60x60bb.jpg",
  artworkUrl100: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/e4/23/35/e4233532-42dc-7ece-d18b-b9b2733cb4e6/source/100x100bb.jpg",
  collectionCensoredName: "In Your Honor",
  collectionExplicitness: "notExplicit",
  collectionId: 300855107,
  collectionName: "In Your Honor",
  collectionPrice: 16.99,
  collectionViewUrl: "https://music.apple.com/us/album/best-of-you/300855107?i=300855110&uo=4",
  country: "USA",
  currency: "USD",
  discCount: 2,
  discNumber: 1,
  isStreamable: true,
  kind: "song",
  previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/a1/34/a5/a134a568-a74a-042e-2c7e-1192efbac8aa/mzaf_8504368996424262545.plus.aac.p.m4a",
  primaryGenreName: "Alternative",
  releaseDate: "2005-05-30T07:00:00Z",
  trackCensoredName: "Best of You",
  trackCount: 10,
  trackExplicitness: "notExplicit",
  trackId: 300855110,
  trackName: "Best of You",
  trackNumber: 3,
  trackPrice: 1.29,
  trackTimeMillis: 255261,
  trackViewUrl: "https://music.apple.com/us/album/best-of-you/300855107?i=300855110&uo=4",
  wrapperType: "track"
}

describe('List Item Render', () => {
  test('List Item Renders', () => {
    const component = renderer.create(
        <ListItem
            key={result.trackId}
            result={result}
        />
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});