import { addComponent, removeComponent } from "bitecs";
import {
  LeftHand,
  RightHand,
  LeftRemote,
  RightRemote,
  CursorRaycastable,
  HandCollisionTarget,
  Holdable,
  HoldableButton,
  HoverMenuChild,
  IgnoreSpaceBubble,
  Inspectable,
  NotRemoteHoverTarget,
  OffersHandConstraint,
  OffersRemoteConstraint,
  Pen,
  PreventAudioBoost,
  RemoteHoverTarget,
  SingleActionButton,
  Static,
  TogglesHoveredActionSet
} from "./bit-components";

//TODO JFS
[
  ["left-hand", LeftHand],
  ["right-hand", RightHand],
  ["left-remote", LeftRemote],
  ["right-remote", RightRemote],
  ["holdable", Holdable],
  ["offers-remote-constraint", OffersRemoteConstraint],
  ["hand-collision-target", HandCollisionTarget],
  ["offers-hand-constraint", OffersHandConstraint],
  ["toggles-hovered-action-set", TogglesHoveredActionSet],
  ["single-action-button", SingleActionButton],
  ["holdable-button", HoldableButton],
  ["pen", Pen],
  ["hover-menu-child", HoverMenuChild],
  ["static", Static],
  ["inspectable", Inspectable],
  ["prevent-audio-boost", PreventAudioBoost],
  ["ignore-space-boost", IgnoreSpaceBubble],
  ["not-remote-hover-target", NotRemoteHoverTarget],
  ["remote-hover-target", RemoteHoverTarget],
  ["cursor-raycastable", CursorRaycastable]
].forEach(([aframeComponentName, bitecsComponent]) => {
  AFRAME.registerComponent(aframeComponentName, {
    init: function() {
      addComponent(APP.world, bitecsComponent, this.el.object3D.eid);
    },
    remove: function() {
      removeComponent(APP.world, bitecsComponent, this.el.object3D.eid);
    }
  });
});
