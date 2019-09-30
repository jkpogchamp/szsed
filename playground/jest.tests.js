const wrapper = shallow(<PostCard id={1} title='Title' content={contentWithLineBreaks} channel='test' timestamp={1234567890} />);
expect(wrapper.find('div')).toHaveLength(3);
expect(wrapper.find('div').at(1).hasClass('card-info')).toBe(true);
expect(wrapper.find('div').at(2).hasClass('card-body')).toBe(true);
expect(wrapper.find('span')).toHaveLength(3);
expect(wrapper.find('span').at(0).hasClass('card-info-channel')).toBe(true);
expect(wrapper.find('span').at(1).hasClass('card-info-divisor')).toBe(true);
expect(wrapper.find('span').at(2).hasClass('card-info-timestamp')).toBe(true);
expect(wrapper.find('span').at(0).text()).toBe('test');
expect(wrapper.find('span').at(1).text()).toBe('•');
expect(wrapper.find('span').at(2).text()).toBe('Posted 1234567890');
expect(wrapper.find('h3')).toHaveLength(1);
expect(wrapper.find('h3').text()).toBe('Title');
expect(wrapper.find('p')).toHaveLength(2);
expect(wrapper.find('p').at(0).hasClass('card-paragraph')).toBe(true);
expect(wrapper.find('p').at(1).hasClass('card-paragraph')).toBe(true);
expect(wrapper.find('p').at(0).text()).toBe('Content');
expect(wrapper.find('p').at(1).text()).toBe('Content');