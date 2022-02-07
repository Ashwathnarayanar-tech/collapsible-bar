import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CollapsibleBar from "../CollapsibleBar";

configure({ adapter: new Adapter() });

describe('CollapsibleBar', () => {
  const element = shallow(<CollapsibleBar collapseHeader='Collapsible Bar'/>)
  test('Heading content check', () => {
    const collapseHeader = element.find('div div button')
    expect(collapseHeader.text()).toBe('Collapsible Bar')
  });
  it('Component should render correctly.', () => {
    expect(element).toMatchSnapshot();
  });

  })




