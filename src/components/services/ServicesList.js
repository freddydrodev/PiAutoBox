import React, { Component } from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import MyIcon from "../common/MyIcon";
import { PRIMARY_COLOR, TEXT_COLOR, BG_LIGHT_COLOR } from "../../tools";
import { selectService } from "../../actions";

class ServiceItem extends Component {
  render() {
    const {
      icon,
      name,
      first,
      last,
      id,
      selectedService,
      selectService
    } = this.props;
    const active = selectedService === id;

    return (
      <View
        style={{
          borderRadius: 20,
          height: 40,
          elevation: 10,
          marginHorizontal: 5,
          marginVertical: 15,
          marginLeft: first ? 0 : 5,
          marginRight: last ? 0 : 5,
          elevation: 10,
          borderRadius: 30,
          overflow: "hidden"
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => selectService(id)}
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: !active ? BG_LIGHT_COLOR : TEXT_COLOR,
                padding: 10,
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <MyIcon name={icon} size={20} color={PRIMARY_COLOR} />
              <Text
                style={{
                  color: !active ? TEXT_COLOR : BG_LIGHT_COLOR,
                  fontFamily: "font",
                  marginLeft: 10
                }}
              >
                {name}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mstp = ({ selectedService }) => ({ selectedService });

const ConnectedServiceItem = connect(
  mstp,
  { selectService }
)(ServiceItem);

const ServicesList = ({ services }) => {
  const max = services.length;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {services &&
        services.map((service, i) => (
          <ConnectedServiceItem
            {...service}
            id={service.key}
            first={i === 0}
            last={i === max - 1}
          />
        ))}
    </ScrollView>
  );
};

export default ServicesList;
