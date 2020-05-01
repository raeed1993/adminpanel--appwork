<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Tooltips and popovers
    </h4>

    <b-card no-body header="Tooltips" header-tag="h6" class="mb-4">
      <b-card-body class="demo-inline-spacing">
        <b-btn variant="default" v-b-tooltip.top title="Tooltip on top">Top</b-btn>
        <b-btn variant="default" v-b-tooltip.right title="Tooltip on right">Right</b-btn>
        <b-btn variant="default" v-b-tooltip.left title="Tooltip on left">Left</b-btn>
        <b-btn variant="default" v-b-tooltip.bottom title="Tooltip on bottom">Bottom</b-btn>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="demo-inline-spacing">
        <div class="text-light small font-weight-semibold mb-3">Variants</div>

        <b-btn id="primaryTooltip" variant="default">Primary</b-btn>
        <b-tooltip target="primaryTooltip" custom-class="tooltip-primary" placement="top">Primary tooltip</b-tooltip>

        <b-btn id="secondaryTooltip" variant="default">Secondary</b-btn>
        <b-tooltip target="secondaryTooltip" custom-class="tooltip-secondary" placement="bottom">Secondary tooltip</b-tooltip>

        <b-btn id="successTooltip" variant="default">Success</b-btn>
        <b-tooltip target="successTooltip" custom-class="tooltip-success" placement="right">Success tooltip</b-tooltip>

        <b-btn id="infoTooltip" variant="default">Info</b-btn>
        <b-tooltip target="infoTooltip" custom-class="tooltip-info" placement="left">Info tooltip</b-tooltip>

        <b-btn id="warningTooltip" variant="default">Warning</b-btn>
        <b-tooltip target="warningTooltip" custom-class="tooltip-warning" placement="bottom">Warning tooltip</b-tooltip>

        <b-btn id="dangerTooltip" variant="default">Danger</b-btn>
        <b-tooltip target="dangerTooltip" custom-class="tooltip-danger" placement="left">Danger tooltip</b-tooltip>

        <b-btn id="darkTooltip" variant="default">Dark</b-btn>
        <b-tooltip target="darkTooltip" custom-class="tooltip-dark" placement="top">Dark tooltip</b-tooltip>
      </b-card-body>
    </b-card>

    <b-card no-body header="Popovers" header-tag="h6" class="mb-4">
      <b-card-body class="demo-inline-spacing">
        <b-btn variant="default" v-b-popover.hover.focus.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on top">Top</b-btn>
        <b-btn variant="default" v-b-popover.hover.focus.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on right">Right</b-btn>
        <b-btn variant="default" v-b-popover.hover.focus.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on left">Left</b-btn>
        <b-btn variant="default" v-b-popover.hover.focus.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" title="Tooltip on bottom">Bottom</b-btn>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="demo-inline-spacing">
        <div class="text-light small font-weight-semibold mb-3">Variants</div>

        <b-btn id="primaryPopover" variant="default" title="Primary popover">Primary</b-btn>
        <b-popover id="primaryPopover-container" container="primaryPopover-container" target="primaryPopover" custom-class="popover-primary" placement="top" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="secondaryPopover" variant="default" title="Secondary popover">Secondary</b-btn>
        <b-popover id="secondaryPopover-container" container="secondaryPopover-container" target="secondaryPopover" custom-class="popover-secondary" placement="bottom" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="successPopover" variant="default" title="Success popover">Success</b-btn>
        <b-popover id="successPopover-container" container="successPopover-container" target="successPopover" custom-class="popover-success" placement="right" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="infoPopover" variant="default" title="Info popover">Info</b-btn>
        <b-popover id="infoPopover-container" container="infoPopover-container" target="infoPopover" custom-class="popover-info" placement="left" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="warningPopover" variant="default" title="Warning popover">Warning</b-btn>
        <b-popover id="warningPopover-container" container="warningPopover-container" target="warningPopover" custom-class="popover-warning" placement="bottom" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="dangerPopover" variant="default" title="Danger popover">Danger</b-btn>
        <b-popover id="dangerPopover-container" container="dangerPopover-container" target="dangerPopover" custom-class="popover-danger" placement="left" triggers="hover focus" content="Embedding content using properties is easy" />

        <b-btn id="darkPopover" variant="default" title="Dark popover">Dark</b-btn>
        <b-popover id="darkPopover-container" container="darkPopover-container" target="darkPopover" custom-class="popover-dark" placement="top" triggers="hover focus" content="Embedding content using properties is easy" />
      </b-card-body>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'ui-tooltips-and-popovers',
  metaInfo: {
    title: 'Tooltips and popovers - UI elements'
  }
}
</script>
